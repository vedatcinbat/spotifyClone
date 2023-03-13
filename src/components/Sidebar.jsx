import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GetAppIcon from "@material-ui/icons/GetApp";
import spotifyImage from "../spotImg.png";
import "./Sidebar.css";
import BottomPlayer from "./BottomPlayer";

function Sidebar() {
  return (
    <div>
      <div className="sidebar  bg-[#050505] text-white md:w-[20vh] lg:w-[24vh] h-[90vh] flex flex-col justify-between">
        <div className="sidebar__top flex flex-col  h-[95vh]">
          <Link to="/">
            <div className="spotify-icon flex mt-[7vh] mb-[2vh] p-2 items-center">
            <img src={spotifyImage} className="w-[4vh] md:w-[3vh] lg:w-[5vh]" />
            <div className = "spotify__header ml-[1vh] text-2xl md:text-[3vh] lg:ml-[2vh] mb-[0.1vh] font-bold">Spotify</div>
          </div>
          </Link>

          <div className="pages  mb-[2vh] p-[1vh]">
            <Link to="/">
              <div className="pages__home flex md:text-sm md:items-center p-2">
                <HomeIcon className = "icon" />
                <div className = "sidebar__text text-[#ffffff]  ml-[2vh]">Home</div>
              </div>
            </Link>
            <Link to="/Search">
              <div className="pages__search  flex md:text-sm md:items-center p-2">
                <SearchIcon className = "icon" />
                <div className = "sidebar__text ml-[2vh]">Search</div>
              </div>
            </Link>
            <Link to="/YourLibrary">
              <div className="pages__yourLibrary  flex md:text-sm md:items-center p-2 whitespace-nowrap">
                <LibraryBooksIcon className = "icon" />
                <div className = "sidebar__text ml-[2vh]">Your Library</div>
              </div>
            </Link>
            <Link to="/LikedSongs">
              <div className="pages__likedSongs  flex md:text-sm md:items-center p-2 whitespace-nowrap">
                <FavoriteIcon className = "icon" />
                <div className = "sidebar__text ml-[2vh]">Liked Songs</div>
              </div>
            </Link>
          </div>
          <div className="playlists p-2">
            <Link to="/PlayList1">
              <div className="playlists__list1 flex md:text-sm md:items-center p-2 ">
                <div className = "sidebar__text cursor-pointer">PlayList1</div>
              </div>
            </Link>
            <Link to="/PlayList2">
              <div className="playlists__list1 flex md:text-sm md:items-center p-2 ">
                <div className = "sidebar__text cursor-pointer">PlayList2</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="sidebar__bottom  h-[5vh]">
          <div className="bottom__installApp  md:text-sm md:items-center flex  h-full items-center pl-2">
            <GetAppIcon className = "icon" />
            <div className = " sidebar__text ml-[2vh] cursor-pointer">Install App</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
