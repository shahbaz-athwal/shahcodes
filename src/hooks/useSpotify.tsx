"use client";

import { SpotifyListeningItem } from "@/types/SpotifyListening";
import React, { useCallback, useMemo, useContext, useReducer, ReactNode } from "react";

// Interfaces
interface SpotifyState {
  listening: SpotifyListeningItem;
}

interface SpotifyAction {
  type: string;
  payload: SpotifyListeningItem;
}

interface SpotifyContextProps extends SpotifyState {
  setSpotifyListening: (payload: SpotifyListeningItem) => void;
}

interface SpotifyProviderProps {
  children: ReactNode;
}

// Initial State
export const initialState: SpotifyState = {
  listening: {} as SpotifyListeningItem,
};

// Action Types
export const types = {
  SET_SPOTIFY_LISTENING: "SET_SPOTIFY_LISTENING",
};

// Reducer Function
export const reducer = (state: SpotifyState, action: SpotifyAction): SpotifyState => {
  switch (action.type) {
    case types.SET_SPOTIFY_LISTENING:
      return {
        ...state,
        listening: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Context Creation
export const SpotifyContext = React.createContext<SpotifyContextProps | undefined>(undefined);
SpotifyContext.displayName = "SpotifyContext";

// Context Provider Component
export const SpotifyProvider: React.FC<SpotifyProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Spotify Action
  const setSpotifyListening = useCallback(
    (payload: SpotifyListeningItem) => dispatch({ type: types.SET_SPOTIFY_LISTENING, payload }),
    [dispatch],
  );

  // Value Memoization
  const value = useMemo(
    () => ({
      ...state,
      setSpotifyListening,
    }),
    [state, setSpotifyListening],
  );

  return <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>;
};

// Custom Hook for Using Spotify Context
export const useSpotify = (): SpotifyContextProps => {
  const context = useContext(SpotifyContext);

  if (!context) {
    throw new Error("useSpotify must be used within a SpotifyProvider");
  }

  return context;
};
