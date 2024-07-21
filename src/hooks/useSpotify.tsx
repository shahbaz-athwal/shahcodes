'use client';

import { SpotifyListeningItem } from '@/types/listening';
import React, { useCallback, useMemo, useContext, useReducer } from 'react';

interface SpotifyState {
    listening: SpotifyListeningItem;
}

// Initial State
  export const initialState: SpotifyState = {
    listening: {},
  };

// Action Types
export const types = {
  SET_SPOTIFY_LISTENING: 'SET_SPOTIFY_LISTENING',
};

// Reducer Function
// @ts-ignore
export const reducer = (state, action) => {
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
export const SpotifyContext = React.createContext(initialState);
SpotifyContext.displayName = 'SpotifyContext';

// Context Provider Component
// @ts-ignore
export const SpotifyProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Spotify Action
  
  const setSpotifyListening = useCallback(
// @ts-ignore
    (payload) => dispatch({ type: types.SET_SPOTIFY_LISTENING, payload }),
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

  return <SpotifyContext.Provider value={value} {...props} />;
};

// Custom Hook for Using Spotify Context
export const useSpotify = () => {
  const context = useContext(SpotifyContext);

  if (!context) {
    throw new Error('useSpotify must be used within a SpotifyProvider');
  }

  return context;
};

