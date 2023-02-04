import { useStoreState } from "easy-peasy";
import React from "react";
import { useParams } from "react-router";
import VideoPlayer from "../../components/videos/VideoPlayer";
import OtherVideoList from "./OtherVideoList";
import PlayingVideoDetails from "./PlayingVideoDetails";

const VideoListPlayer = () => {
  const { videoId } = useParams();
  const {
    currentPlaylist: { playlistItems },
  } = useStoreState((state) => state.playlist);

  let playingVideo = {};
  const othersVideo = playlistItems?.reduce((acc, cur) => {
    if (cur.contentDetails.videoId === videoId) {
      playingVideo = cur;
    } else {
      // finding after playing videos in playlist
      if (playingVideo?.title) return [...acc, cur];
    }
    return acc;
  }, []);

  // console.log(" playingVideo", playingVideo);
  // console.log("othersVideo", othersVideo);

  return (
    <div className="mt-16">
      <VideoPlayer />
      <PlayingVideoDetails playingVideo={playingVideo} />

      <OtherVideoList ordersItems={othersVideo} />
    </div>
  );
};

export default VideoListPlayer;
