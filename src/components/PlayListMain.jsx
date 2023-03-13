import React from 'react'

function PlayListMain() {
  return (
    <div className = "bg-gradient-to-b from-[#5038a0] to-[#281c50] h-[60vh] relative pl-[6vh] overflow-hidden flex items-center">
        <div className="playList__box">
            <img 
            src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            alt=""
            className = "rounded-[2.5vh]"
            />
        </div>
        <div className="playList__header ml-[5vh]">
            <div className = "font-bold text-white text-[3.5vh]">Playlist</div>
            <div className = "font-bold text-white text-[7.5vh] mb-4">Liked Songs</div>
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
  )
}

export default PlayListMain