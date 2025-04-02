"use client";
import { useEffect, useState, useRef, useCallback } from "react";

interface LanyardResponse {
  op: number;
  t?: string;
  d: any;
}

export const useActivity = (userId: string) => {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "connected" | "error">("idle");

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 10;
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    try {
      setStatus("connecting");
      wsRef.current = new WebSocket("wss://api.lanyard.rest/socket");

      wsRef.current.onopen = () => {
        setStatus("connected");
        reconnectAttemptsRef.current = 0;

        // Send subscription message
        wsRef.current?.send(
          JSON.stringify({
            op: 2,
            d: {
              subscribe_to_ids: [userId],
            },
          }),
        );
      };

      wsRef.current.onmessage = (event) => {
        const message = JSON.parse(event.data) as LanyardResponse;

        // Handle heartbeat requests from server
        if (message.op === 1) {
          // Clear any existing heartbeat interval
          if (heartbeatIntervalRef.current) {
            clearInterval(heartbeatIntervalRef.current);
          }

          // Start heartbeat interval to keep connection alive
          heartbeatIntervalRef.current = setInterval(() => {
            if (wsRef.current?.readyState === WebSocket.OPEN) {
              wsRef.current.send(JSON.stringify({ op: 3 }));
            }
          }, message.d.heartbeat_interval);
        }

        console.log(message);

        if (message.t === "INIT_STATE") {
          setData(message.d[userId]);
        }

        if (message.t === "PRESENCE_UPDATE") {
          setData(message.d);
        }
      };

      wsRef.current.onerror = (error) => {
        console.error("WebSocket error:", error);
        setStatus("error");
      };

      wsRef.current.onclose = (event) => {
        setStatus("idle");

        // Clean up any existing heartbeat interval
        if (heartbeatIntervalRef.current) {
          clearInterval(heartbeatIntervalRef.current);
          heartbeatIntervalRef.current = null;
        }

        // Don't reconnect if closed normally or if max attempts reached
        if (event.wasClean || reconnectAttemptsRef.current >= maxReconnectAttempts) {
          return;
        }

        // Exponential backoff for reconnection
        const delay = Math.min(1000 * 2 ** reconnectAttemptsRef.current, 30000);
        reconnectAttemptsRef.current++;

        console.log(`Reconnecting in ${delay}ms (attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts})`);

        if (reconnectTimeoutRef.current) {
          clearTimeout(reconnectTimeoutRef.current);
        }

        reconnectTimeoutRef.current = setTimeout(() => {
          connect();
        }, delay);
      };
    } catch (err) {
      console.error("Failed to create WebSocket connection:", err);
      setStatus("error");
    }
  }, []);

  // Initialize connection
  useEffect(() => {
    connect();

    // Cleanup function
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }

      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
        heartbeatIntervalRef.current = null;
      }

      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }
    };
  }, [connect]);

  // Handle visibility change (reconnect when tab becomes visible again)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN)) {
        connect();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [connect]);

  return { data, status, reconnect: connect };
};

export default useActivity;
