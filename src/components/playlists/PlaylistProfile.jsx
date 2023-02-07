import React from "react";

const PlaylistProfile = ({ currentPlaylist }) => {
  const {
    playlistTitle,
    playlistDescription,
    playlistThumbnail,
    channelData,
    channelTitle,
    playlistItems,
    publishedAt,
  } = currentPlaylist || {};
  const date = new Date(publishedAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const humanReadableDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="md:max-w-[750px] mx-auto">
      <div className="pt-10 flex-1">
        <div
          x-data="{ openSettings: false }"
          className="absolute right-12 mt-4 rounded"
        >
          <div
            x-show="openSettings"
            className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
            style={{ display: "none" }}
          >
            <div className="py-2 border-b">
              <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                Settings
              </p>
              <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Share Profile</span>
              </button>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Block User</span>
              </button>
            </div>
            <div className="py-2">
              <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                Feedback
              </p>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Report</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[250px]">
          <img
            src={playlistThumbnail?.url}
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="flex flex-col items-center  -mt-20">
          <img
            src={channelData?.thumbnails.url}
            className="w-40 border-4 border-white rounded-full"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="md:text-2xl text-xl font-bold ">{playlistTitle}</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-700 my-2">{playlistDescription}</p>
          <p className="text-md text-gray-500">
            from
            <a
              href={channelData?.url}
              className="font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {channelTitle}
            </a>
          </p>

          <span className=" font-bold "> Videos: {playlistItems?.length}</span>
          <span className=" font-bold "> Published: {humanReadableDate}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistProfile;
