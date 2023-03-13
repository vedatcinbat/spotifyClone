import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function YourLibraryMain() {
  return (
    <div className="bg-[#121212] text-white w-full h-[90vh]">
      <Navbar />
      <div className="boxes flex items-center">
        <Link to="/LikedSongs" className = "flex-1">
          <div className=" bg-gradient-to-b from-[#1c0141] to-[#121212] h-[60vh] relative pl-[6vh] overflow-hidden flex items-center">
            <div className="playList__box bg-gradient-to-br from-[#0765d1] to-[#36028a] w-[70vh] h-[50vh] rounded-lg flex flex-col justify-between p-[8vh]">
              <div>
                o Mr.Children シーソーゲーム~勇敢な恋の歌~ <br /> o MIKA Grace
                Kelly o MIKA Relax, Take It Easy <br />o Train Drive By o back
                number 水平線 <br /> o YOASOBI 祝福{" "}
              </div>
              <div className="bottom_part">
                <div className="text-3xl font-bold mb-4">Liked Songs</div>
                <div className="text-[#b4b4b4]">15 Liked songs</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/PlayList1" className = "flex-1">
          <div className=" bg-gradient-to-b from-[#1c0141] to-[#121212] h-[60vh] relative pl-[6vh] overflow-hidden flex items-center">
            <div className="playList__box bg-gradient-to-br from-[#b700ff] to-[#001e70] w-[40vh] h-[50vh] rounded-lg flex flex-col justify-between p-[8vh] items-center">
              <div className="upper_part w-[30vh]">
                <img
                  className="mb-4 -mt-[4vh] rounded-[2vh]"
                  src="https://mosaic.scdn.co/300/ab67616d00001e026101e08696469c595f25deeeab67616d00001e02783ed3c2af46af7ab7c671c0ab67616d00001e027c249f4f7e25e26f05ff4c04ab67616d00001e02b3adccb3e66a3f8447564c62"
                  alt=""
                />
              </div>
              <div className="bottom_part flex flex-col items-center text-center">
                <div className="text-3xl font-bold mb-4">PlayList1</div>
                <div className="text-[#b4b4b4]">15 Liked songs</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/PlayList2" className = "flex-1">
          <div className=" bg-gradient-to-b from-[#1c0141] to-[#121212] h-[60vh] relative pl-[6vh] overflow-hidden flex items-center">
            <div className="playList__box bg-gradient-to-br from-[#7c0000] to-[#003d99] w-[40vh] h-[50vh] rounded-lg flex flex-col justify-between p-[8vh] items-center">
              <div className="upper_part w-[30vh]">
                <img
                  className="mb-4 -mt-[4vh]  rounded-[2vh]"
                  src="https://mosaic.scdn.co/300/ab67616d00001e02707d13d3f87652e737e94d45ab67616d00001e027e09670f90cd47b3fb9a23e0ab67616d00001e0285e5dcc05cc216a10f141480ab67616d00001e02e2dd4e821bcc3f70dc0c8ffd"
                  alt=""
                />
              </div>
              <div className="bottom_part flex flex-col items-center text-center">
                <div className="text-3xl font-bold mb-4">PlayList2</div>
                <div className="text-[#b4b4b4]">15 Liked songs</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default YourLibraryMain;
