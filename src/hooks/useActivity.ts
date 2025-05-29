"use client";
import { LanyardData, LanyardMessage } from "@/types/Lanyard";
import { useEffect, useState, useCallback } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSpotify } from "./useSpotify";

export const useActivity = (userId: string) => {
  const [data, setData] = useState<LanyardData | null>(null);
  const { setSpotifyListening } = useSpotify();

  const { sendMessage, readyState, getWebSocket } = useWebSocket("wss://api.lanyard.rest/socket", {
    onOpen: () => {
      // Send subscription message
      sendMessage(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_ids: [userId],
          },
        })
      );
    },

    onMessage: (event) => {
      const message = JSON.parse(event.data) as LanyardMessage;

      // Handle heartbeat requests from server
      if (message.op === 1) {
        // Set up heartbeat interval to keep connection alive
        const heartbeatInterval = message.d.heartbeat_interval;
        const intervalId = setInterval(() => {
          sendMessage(JSON.stringify({ op: 3 }));
        }, heartbeatInterval);

        // Store the interval ID for cleanup
        (getWebSocket() as any)._heartbeatIntervalId = intervalId;
      }

      if (message.t === "INIT_STATE") {
        const userData = message.d[userId];
        setData(userData);
        setSpotifyListening(userData.listening_to_spotify ? userData.spotify : null);
      }

      if (message.t === "PRESENCE_UPDATE") {
        setData(message.d);
        setSpotifyListening(message.d.listening_to_spotify ? message.d.spotify : null);
      }
    },
    // Automatically reconnect on connection closed
    shouldReconnect: (closeEvent) => true,
    // Exponential backoff for reconnection attempts
    reconnectInterval: (attemptNumber) => Math.min(1000 * 2 ** attemptNumber, 30000),
    // Max 10 reconnection attempts
    reconnectAttempts: 10,
  });

  const getStatusFromReadyState = (readyState: ReadyState): "idle" | "connecting" | "connected" | "error" => {
    switch (readyState) {
      case ReadyState.CONNECTING:
        return "connecting";
      case ReadyState.OPEN:
        return "connected";
      case ReadyState.CLOSING:
      case ReadyState.CLOSED:
        return "idle";
      case ReadyState.UNINSTANTIATED:
        return "error";
      default:
        return "idle";
    }
  };

  const status = getStatusFromReadyState(readyState);

  // Manual reconnect function to allow user-triggered reconnection
  const reconnect = useCallback(() => {
    const ws = getWebSocket();
    if (ws) {
      // Clean up any existing heartbeat interval
      if ((ws as any)._heartbeatIntervalId) {
        clearInterval((ws as any)._heartbeatIntervalId);
        (ws as any)._heartbeatIntervalId = null;
      }

      // Close and reconnect
      ws.close();
    }
  }, [getWebSocket]);

  // Cleanup heartbeat interval on unmount
  useEffect(() => {
    return () => {
      const ws = getWebSocket();
      if (ws && (ws as any)._heartbeatIntervalId) {
        clearInterval((ws as any)._heartbeatIntervalId);
      }
    };
  }, [getWebSocket]);

  return { data, status, reconnect };
};

export default useActivity;
