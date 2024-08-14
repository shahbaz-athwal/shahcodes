const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;
const baseEndpoint = "https://api.spotify.com/v1";
const tokenEndpoint = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const body = params.toString();

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  return response.json();
};

export const getCurrentlyListening = async () => {
  const { access_token: accessToken } = await getAccessToken();
  if (!accessToken) {
    return;
  }

  return fetch(`${baseEndpoint}/me/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getRecentlyPlayed = async () => {
  const { access_token: accessToken } = await getAccessToken();
  if (!accessToken) {
    return;
  }

  return fetch(`${baseEndpoint}/me/player/recently-played?limit=15`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
