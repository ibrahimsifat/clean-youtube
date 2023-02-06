import { useStoreState } from "easy-peasy";
import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { calculateTime } from "../../utils/time";
import PrevNextBtn from "../UI/PrevNextBtn";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const { currentPlaylist } = useStoreState((state) => state.playlist);
  const [event, setEvent] = useState();

  const playerRef = useRef();
  const [startTime, setStartTime] = useState(0);
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  const onChange = (e) => {
    if (
      e.data === YouTube?.PlayerState.PLAYING ||
      e.data === YouTube?.PlayerState.UNSTARTED
    ) {
      setEvent(e);
    }

    if (
      e.data === YouTube?.PlayerState.PAUSED ||
      e.data === YouTube?.PlayerState.ENDED
    ) {
      setEvent(e);
    }

    return;
  };
  console.log(calculateTime(event?.target.getDuration()));
  console.log(calculateTime(event?.target.getCurrentTime()));
  console.log(event?.target.nextVideo());

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
      start: startTime,
    },
  };
  // next and previous video handlers
  const { playlistItems } = currentPlaylist || {};
  // playlistItems?.forEach((video) => {
  //   if (video.contentDetails.videoId === videoId) {

  //     console.log(video);
  //   }
  // });
  const currentPlaylistIndex = playlistItems?.findIndex(
    (video) => video?.contentDetails.videoId === videoId
  );
  const prevPlaylistIndex = currentPlaylistIndex - 1;
  const prevVideoId = playlistItems[prevPlaylistIndex]?.contentDetails.videoId;
  const nextPlaylistIndex = currentPlaylistIndex + 1;
  const nextVideoId = playlistItems[nextPlaylistIndex]?.contentDetails.videoId;

  return (
    <>
      <YouTube
        data-placeholder
        videoId={videoId}
        opts={opts}
        className=" mx-auto 2xl:w-10/12 xl:w-10/12 2xl:h-[723px] xl:h-[604px] lg:h-[583px] md:h-[435px] sm:h-[363px] videoQuire w-full p-1 rounded bg-gradient-to-r from-teal-50 to-rose-50 bg-opacity-20 relative"
        onReady={onPlayerReady}
        onStateChange={onChange}
        // getCurrentTime={(im) => console.log(im)}
        // onEnd={onEnd}
        ref={playerRef}
      />
      <div className="flex justify-between items-center my-3">
        {prevVideoId && (
          <Link to={`/video/${prevVideoId}`}>
            <PrevNextBtn prev level="Prev" />
          </Link>
        )}
        {nextVideoId && (
          <Link to={`/video/${nextVideoId}`}>
            <PrevNextBtn level="Next" />
          </Link>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
