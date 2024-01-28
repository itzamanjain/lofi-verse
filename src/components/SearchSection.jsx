import { useContext } from "react";
import MusicContext from "../context/MusicContext";
import SongItem from "./SongItem";
import { Link } from "react-router-dom";

const SearchSection = () => {
  const { searchedSongs } = useContext(MusicContext);
  const gohome = () => {
    window.location.href = "/";
  }
  return (
    <div
      className={`fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center flex-wrap gap-4 bg-white bg-opacity-50 backdrop-blur-lg ${
        searchedSongs.length === 0 ? "-translate-y-[1200px]" : "translate-y-0"
      } transition-all duration-500 ease-linear`}
    >
      {searchedSongs?.map((song) => (
        <SongItem key={song.id} {...song} />
      ))}
      <button onClick={gohome} className="text-3xl border-2 border-black rounded-full h-9 w-9 ">X</button>
    </div>
  );
};

export default SearchSection;