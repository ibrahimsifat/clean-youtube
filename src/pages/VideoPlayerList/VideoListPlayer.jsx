import { useStoreActions } from "easy-peasy";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import VideoPlayer from "../../components/videos/VideoPlayer";
const VideoListPlayer = () => {
  const { videoId } = useParams();

  const { setRunningVideoById } = useStoreActions(
    (actions) => actions.playlist
  );

  // set running video
  useEffect(() => {
    setRunningVideoById(videoId);
  }, [videoId]);

  return (
    <div className="mt-16">
      <VideoPlayer />
    </div>
  );
};

export default VideoListPlayer;
