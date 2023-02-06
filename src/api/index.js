import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data.nextPageToken, result);
  }
  return result;
};

const getChannelData = async (channelId) => {
  const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${key}`;
  const {
    data: { items },
  } = await axios.get(channelUrl);
  const {
    customUrl,
    country,
    description,
    title,
    thumbnails: { default: channelThumbnails },
  } = items[0].snippet;
  return {
    url: `https://www.youtube.com/${customUrl}`,
    country,
    thumbnails: channelThumbnails,
    description,
    channelTitle: title,
  };
};
const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

  const { data } = await axios.get(URL);

  // get all playlist items with recursion
  let playlistItems = await getPlaylistItem(playlistId);

  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
    publishedAt,
  } = data?.items[0]?.snippet;

  // get channel data
  const channelData = await getChannelData(channelId);

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { high },
    } = item.snippet;

    return {
      title,
      description,
      thumbnail: high,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playlistId,
    playlistTitle,
    publishedAt,
    playlistDescription,
    playlistThumbnail: thumbnails.high,
    channelId,
    channelData,
    channelTitle,
    playlistItems,
  };
};

export default getPlaylist;
