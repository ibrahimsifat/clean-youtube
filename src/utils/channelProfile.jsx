import React from "react";

const ChannelProfile = ({ channelUrl, channelTitle, thumbnails }) => {
  return (
    <a href={channelUrl} target="_blank">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={
            thumbnails?.url ||
            "https://alternative.me/media/256/unsplash-icon-ajbla17bldc2lh5m-c.png"
          }
          alt={channelTitle}
        />
        <div className="text-sm">
          <p className="leading-none">{channelTitle?.slice(0, 23)}</p>
        </div>
      </div>
    </a>
  );
};

export default ChannelProfile;
