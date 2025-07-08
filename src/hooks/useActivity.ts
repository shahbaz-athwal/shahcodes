"use client";
import { useRef, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import type { LanyardData, LanyardMessage } from "@/types/Lanyard";
import { useSpotify } from "./useSpotify";

export const useActivity = (userId: string) => {
  const [data, setData] = useState<LanyardData | null>(null);
  const { setSpotifyListening } = useSpotify();
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const { sendMessage, readyState } = useWebSocket(
    "wss://api.lanyard.rest/socket",
    {
      onOpen: () => {
        sendMessage(
          JSON.stringify({
            op: 2,
            d: {
              subscribe_to_ids: [userId],
            },
          }),
        );
      },

      onMessage: (event) => {
        const message = JSON.parse(event.data) as LanyardMessage;

        // Handle heartbeat requests from server
        if (message.op === 1) {
          // Clear any existing heartbeat interval
          if (heartbeatIntervalRef.current) {
            clearInterval(heartbeatIntervalRef.current);
          }

          // Set up new heartbeat interval
          const heartbeatInterval = message.d.heartbeat_interval;
          heartbeatIntervalRef.current = setInterval(() => {
            sendMessage(JSON.stringify({ op: 3 }));
          }, heartbeatInterval);
        }

        if (message.t === "INIT_STATE") {
          const userData = message.d[userId];
          setData(userData);
          setSpotifyListening(
            userData.listening_to_spotify ? userData.spotify : null,
          );
        }

        if (message.t === "PRESENCE_UPDATE") {
          setData(message.d);
          setSpotifyListening(
            message.d.listening_to_spotify ? message.d.spotify : null,
          );
        }
      },

      onClose: () => {
        // Clean up heartbeat interval when connection closes
        if (heartbeatIntervalRef.current) {
          clearInterval(heartbeatIntervalRef.current);
          heartbeatIntervalRef.current = null;
        }
      },

      shouldReconnect: () => true,
      reconnectInterval: (attemptNumber) =>
        Math.min(1000 * 2 ** attemptNumber, 30000),
      reconnectAttempts: 10,
    },
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "connecting",
    [ReadyState.OPEN]: "connected",
    [ReadyState.CLOSING]: "closing",
    [ReadyState.CLOSED]: "closed",
    [ReadyState.UNINSTANTIATED]: "error",
  }[readyState];

  return { data, connectionStatus };
};

export default useActivity;
