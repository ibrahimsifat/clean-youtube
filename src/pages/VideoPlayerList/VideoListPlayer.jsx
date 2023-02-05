import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import VideoPlayer from "../../components/videos/VideoPlayer";
import OtherVideoList from "./OtherVideoList";
import PlayingVideoDetails from "./PlayingVideoDetails";
const VideoListPlayer = () => {
  const { videoId } = useParams();

  const { setRunningVideoById } = useStoreActions(
    (actions) => actions.playlist
  );
  const { runningVideo } = useStoreState((state) => state.playlist);

  // set running video
  useEffect(() => {
    setRunningVideoById(videoId);
  }, [videoId]);
  const {
    currentPlaylist: { playlistItems },
  } = useStoreState((state) => state.playlist);

  // const othersVideo = playlistItems?.filter(
  //   (video) => video.contentDetails.videoId !== videoId
  // );

  // const othersVideo = playlistItems?.reduce((acc, cur) => {
  //   if (cur.contentDetails.videoId === videoId) {
  //     cur["clicked"] = true;
  //   } else {
  //     return [...acc, cur];
  //   }
  //   return acc;
  // }, []);

  // console.log(" playingVideo", playingVideo);
  // console.log("othersVideo", othersVideo);

  return (
    <div className="mt-16">
      <VideoPlayer />
      <PlayingVideoDetails />

      <OtherVideoList ordersItems={playlistItems} />
    </div>
  );
};

export default VideoListPlayer;
