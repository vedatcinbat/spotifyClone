import React from 'react'
import LikedSongList from './LikedSongList'
import Navbar from './Navbar'

function PlayList2Main() {
  return (
    <div className="bg-[#121212] text-white w-full h-[90vh] overflow-scroll scrollbar-hide">
        <Navbar />
        <div className = "bg-gradient-to-b from-[#5038a0] to-[#281c50] h-[60vh] relative pl-[6vh] overflow-hidden flex items-center">
        <div className="playList__box">
            <img 
            src="https://mosaic.scdn.co/300/ab67616d00001e02707d13d3f87652e737e94d45ab67616d00001e027e09670f90cd47b3fb9a23e0ab67616d00001e0285e5dcc05cc216a10f141480ab67616d00001e02e2dd4e821bcc3f70dc0c8ffd"
            alt=""
            className = "rounded-[2.5vh]"
            />
        </div>
        <div className="playList__header ml-[5vh]">
            <div className = "font-bold text-white text-[3.5vh]">Playlist</div>
            <div className = "font-bold text-white text-[7.5vh] mb-4">PlayList2</div>
            <div className="playList__headerProfile flex justify-start items-center">
                <div className="profileImg">
                    <img 
                    className = "w-[5vh] h-[5vh] rounded-full"
                    src="https://i.scdn.co/image/ab6775700000ee85972d425d65370e2561945fe4" 
                    alt="" 
                    />
                </div>
                <div className="profileName ml-2 text-[#fff]">
                    <div>Vedat Cinbat</div>
                </div>
                <div className="numberOfSongs ml-2 text-[#e2e2e2]">
                    <div>15 songs</div>
                </div>
            </div>
        </div>
    </div>
    <LikedSongList />
    </div>
  )
}

export default PlayList2Main