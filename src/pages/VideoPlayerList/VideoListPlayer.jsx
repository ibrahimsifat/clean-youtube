import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import VideoPlayer from "../../components/videos/VideoPlayer";
import OtherVideoList from "./OtherVideoList";
import PlayingVideoDetails from "./PlayingVideoDetails";

const VideoListPlayer = () => {
  const { videoId } = useParams();
  const { getVideoById } = useStoreActions((actions) => actions.playlist);
  const { runningVideo } = useStoreState((state) => state.playlist);

  // set running video
  useEffect(() => {
    getVideoById(videoId);
  }, [videoId]);
  const {
    currentPlaylist: { playlistItems },
  } = useStoreState((state) => state.playlist);

  const othersVideo = playlistItems?.filter(
    (video) => video.contentDetails.videoId !== videoId
  );

  // console.log(" playingVideo", playingVideo);
  // console.log("othersVideo", othersVideo);

  return (
    <div className="mt-16">
      <VideoPlayer />
      <PlayingVideoDetails runningVideo={runningVideo} />

      <OtherVideoList ordersItems={othersVideo} />
    </div>
  );
};

export default VideoListPlayer;
