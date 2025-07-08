"use client";

import React, {
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import type { SpotifyData } from "@/types/Lanyard";
import type { SpotifyPlayedItem } from "@/types/SpotifyRecentlyPlayed";

// Interfaces
interface SpotifyState {
  listening: SpotifyData | null;
  recentlyPlayed: SpotifyPlayedItem[] | null;
}

interface SpotifyAction {
  type: string;
  payload: SpotifyData | SpotifyPlayedItem[] | null;
}

interface SpotifyContextProps extends SpotifyState {
  setSpotifyListening: (payload: SpotifyData | null) => void;
  setSpotifyRecentlyPlayed: (payload: SpotifyPlayedItem[] | null) => void;
}

interface SpotifyProviderProps {
  children: ReactNode;
}

// Initial State
export const initialState: SpotifyState = {
  listening: null,
  recentlyPlayed: null,
};

// Action Types
export const types = {
  SET_SPOTIFY_LISTENING: "SET_SPOTIFY_LISTENING",
  SET_SPOTIFY_RECENTLY_PLAYED: "SET_SPOTIFY_RECENTLY_PLAYED",
};

// Reducer Function
export const reducer = (
  state: SpotifyState,
  action: SpotifyAction,
): SpotifyState => {
  switch (action.type) {
    case types.SET_SPOTIFY_LISTENING:
      return {
        ...state,
        listening: action.payload as SpotifyData,
      };
    case types.SET_SPOTIFY_RECENTLY_PLAYED:
      return {
        ...state,
        recentlyPlayed: action.payload as SpotifyPlayedItem[] | null,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Context Creation
export const SpotifyContext = React.createContext<
  SpotifyContextProps | undefined
>(undefined);
SpotifyContext.displayName = "SpotifyContext";

// Context Provider Component
export const SpotifyProvider: React.FC<SpotifyProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Spotify Actions
  const setSpotifyListening = useCallback(
    (payload: SpotifyData | null) =>
      dispatch({ type: types.SET_SPOTIFY_LISTENING, payload }),
    [],
  );

  const setSpotifyRecentlyPlayed = useCallback(
    (payload: SpotifyPlayedItem[] | null) =>
      dispatch({ type: types.SET_SPOTIFY_RECENTLY_PLAYED, payload }),
    [],
  );

  // Value Memoization
  const value = useMemo(
    () => ({
      ...state,
      setSpotifyListening,
      setSpotifyRecentlyPlayed,
    }),
    [state, setSpotifyListening, setSpotifyRecentlyPlayed],
  );

  return (
    <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
  );
};

// Custom Hook for Using Spotify Context
export const useSpotify = (): SpotifyContextProps => {
  const context = useContext(SpotifyContext);

  if (!context) {
    throw new Error("useSpotify must be used within a SpotifyProvider");
  }

  return context;
};
