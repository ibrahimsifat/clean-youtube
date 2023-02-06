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
  } = currentPlaylist;
  const date = new Date(publishedAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const humanReadableDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="md:max-w-[750px] mx-auto">
      <div class="pt-10 flex-1">
        <div
          x-data="{ openSettings: false }"
          class="absolute right-12 mt-4 rounded"
        >
          <div
            x-show="openSettings"
            class="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
            style={{ display: "none" }}
          >
            <div class="py-2 border-b">
              <p class="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
              <button class="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
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
                <span class="text-sm text-gray-700">Share Profile</span>
              </button>
              <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
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
                <span class="text-sm text-gray-700">Block User</span>
              </button>
            </div>
            <div class="py-2">
              <p class="text-gray-400 text-xs px-6 uppercase mb-1">Feedback</p>
              <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
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
                <span class="text-sm text-gray-700">Report</span>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full h-[250px]">
          <img
            src={playlistThumbnail.url}
            class="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div class="flex flex-col items-center -mt-20">
          <img
            src={channelData?.thumbnails.url}
            class="w-40 border-4 border-white rounded-full"
          />
          <div class="flex items-center space-x-2 mt-2">
            <p class="md:text-2xl text-xl font-bold ">{playlistTitle}</p>
            <span class="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-100 h-2.5 w-2.5"
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
          <p class="text-gray-700 my-2">{playlistDescription}</p>
          <p class="text-md text-gray-500">
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

          <span class=" font-bold "> Videos: {playlistItems.length}</span>
          <span class=" font-bold "> Published: {humanReadableDate}</span>
        </div>

        <a href={channelData?.url} target="_blank" rel="noopener noreferrer">
          <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100 mx-auto mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
            <span>To Channel</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default PlaylistProfile;
