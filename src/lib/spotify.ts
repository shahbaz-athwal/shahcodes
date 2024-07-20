import axios from 'axios';

const getAccessToken = async () => {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  try {
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
  } catch (error) {
    console.error('Error getting access token:', error);
    throw new Error('Failed to get access token');
  }
};

export const getCurrentlyListening = async () => {
  const nowPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing';

  try {
    const { access_token: accessToken } = await getAccessToken();

    if (!accessToken) {
      throw new Error('No access token available');
    }

    const response = await axios.get(nowPlayingEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    console.error('Error getting currently playing track:', error);
    throw new Error('Failed to get currently playing track');
  }
};
