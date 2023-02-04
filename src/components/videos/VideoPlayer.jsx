import React from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const { videoId } = useParams();

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      className=" mx-auto 2xl:w-10/12 xl:w-10/12 2xl:h-[723px] xl:h-[604px] lg:h-[583px] md:h-[435px] sm:h-[363px] videoQuire w-full p-1 rounded bg-gradient-to-r from-teal-50 to-rose-50 bg-opacity-20"
      onReady={onPlayerReady}
    />
  );
};

// videoId={string}                  // defaults -> ''
// id={string}                       // defaults -> ''
// className={string}                // defaults -> ''
// iframeClassName={string}          // defaults -> ''
// style={object}                    // defaults -> {}
// title={string}                    // defaults -> ''
// loading={string}                  // defaults -> undefined
// opts={obj}                        // defaults -> {}
// onReady={func}                    // defaults -> noop
// onPlay={func}                     // defaults -> noop
// onPause={func}                    // defaults -> noop
// onEnd={func}                      // defaults -> noop
// onError={func}                    // defaults -> noop
// onStateChange={func}              // defaults -> noop
// onPlaybackRateChange={func}       // defaults -> noop
// onPlaybackQualityChange={func}    // defaults -> noop
export default VideoPlayer;