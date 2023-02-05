import { useEffect, useState } from "react";

const UseSearch = (searchString, playlists, searchField) => {
  const [playlistState, setPlaylistState] = useState([]);

  const search = (string) => {
    return (playlist) => {
      if (!string?.trim().length) return playlist;
      return playlist[searchField].toLowerCase().match(string)
        ? { ...playlist, matchSearch: true }
        : { ...playlist, matchSearch: false };
    };
  };
  useEffect(() => {
    const filteredPlaylist = playlists?.map(
      search(searchString?.toLowerCase())
    );

    setPlaylistState(filteredPlaylist);
  }, [searchString, playlists?.length]);

  return playlistState;
};

export default UseSearch;
