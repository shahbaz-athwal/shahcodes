export interface SpotifyListeningItem {
    id?: string;
    isPlaying?: boolean;
    title?: string;
    artist?: string;
    album?: string;
    thumbnail?: string;
    url?: string;
    progress?: number;
    duration?: number;
  }