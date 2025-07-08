export interface LanyardData {
  spotify: SpotifyData | null;
  listening_to_spotify: boolean;
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Activity[];
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_web: boolean;
}

export interface LanyardMessage {
  op: number;
  t?: string;
  // biome-ignore lint: fix later
  d: any;
}

export interface Activity {
  id: string;
  name: string;
  type: number;
  application_id?: string;
  state?: string;
  details?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

export interface SpotifyData {
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
}
