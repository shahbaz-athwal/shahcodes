"use client";
import { useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import type { LanyardData, LanyardMessage } from "@/types/Lanyard";
import { useSpotify } from "./useSpotify";

export const useActivity = (userId: string) => {
  const [data, setData] = useState<LanyardData | null>(null);
  const { setSpotifyListening } = useSpotify();

  const { sendMessage, readyState } = useWebSocket(
    "wss://api.lanyard.rest/socket",
    {
      onOpen: () => {
        // Send subscription message
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
      shouldReconnect: () => true,
      reconnectInterval: (attemptNumber) =>
        Math.min(1000 * 2 ** attemptNumber, 30000),
      reconnectAttempts: 10,
      heartbeat: {
        message: JSON.stringify({ op: 3 }),
        returnMessage: JSON.stringify({ op: 1 }),
        timeout: 30000,
        interval: 30000,
      },
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
