import axios from "axios";

const getAccessToken = async () => {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString(),
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};

export const getCurrentlyListening = async () => {
  const nowPlayingEndpoint =
    "https://api.spotify.com/v1/me/player/currently-playing";

  const { access_token: accessToken } = await getAccessToken();

  const response = await axios.get(nowPlayingEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const getRecentlyPlayed = async () => {
  const limit = 10;
  const before = new Date().getTime();
  // @ts-ignore
  const params = new URLSearchParams({
    limit,
    before,
  }).toString();

  const { access_token: accessToken } = await getAccessToken();

  const response = await axios.get(`https://api.spotify.com/v1/me/player/recently-played?${params}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
