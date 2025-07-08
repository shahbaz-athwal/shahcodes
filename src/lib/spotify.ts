const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN as string;
const BASE_ENDPOINT = "https://api.spotify.com/v1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: REFRESH_TOKEN,
  });

  const body = params.toString();

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
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

  return fetch(`${BASE_ENDPOINT}/me/player/currently-playing`, {
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

  return fetch(`${BASE_ENDPOINT}/me/player/recently-played?limit=15`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getTopArtists = async () => {
  const { access_token: accessToken } = await getAccessToken();
  if (!accessToken) {
    return;
  }

  return fetch(
    `${BASE_ENDPOINT}/me/top/artists?limit=5&time_range=medium_term`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};
