import { useStoreState } from "easy-peasy";
import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import VideoPlayerDetails from "../../pages/VideoPlayerList/VideoPlayerDetails";
import { calculateTime } from "../../utils/time";
import SwitchVideo from "./SwitchVideo";

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
  const runningVideoDuration = calculateTime(event?.target.getDuration());
  const currentPlayingTime = calculateTime(event?.target.getCurrentTime());
  console.log(event?.target.getVideoData());

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

  const currentPlaylistIndex = playlistItems?.findIndex(
    (video) => video?.contentDetails.videoId === videoId
  );
  const prevPlaylistIndex = currentPlaylistIndex - 1;
  const prevVideoId = playlistItems[prevPlaylistIndex]?.contentDetails.videoId;
  const nextPlaylistIndex = currentPlaylistIndex + 1;
  const nextVideoId = playlistItems[nextPlaylistIndex]?.contentDetails.videoId;
  const runningVideo =
    playlistItems[currentPlaylistIndex]?.contentDetails.videoId;
  console.log();

  // running video details
  const {
    channelTitle,
    channelData: { thumbnails, url },
  } = currentPlaylist;

  const { title } = runningVideo || {};
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
      <SwitchVideo prevVideoId={prevVideoId} nextVideoId={nextVideoId} />
      <div className="space-y-4 dark:text-white font-bold ">
        <p className="md:text-2xl text-xl font-bold my-5">{title}</p>
        <div className="flex justify-between items-center">
          <a href={url} target="_blank">
            <div className="flex items-center cursor-pointer">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={thumbnails?.url}
                alt="Avatar of Writer"
              />
              <div className="text-md">
                <p className="leading-none">{channelTitle}</p>
                {/* <p className="leading-none text-sm">{"channelTitle"}</p> */}
              </div>
            </div>
          </a>
        </div>
      </div>
      <VideoPlayerDetails
        ordersItems={playlistItems}
        currentPlayingTime={currentPlayingTime}
      />
    </>
  );
};

export default VideoPlayer;
