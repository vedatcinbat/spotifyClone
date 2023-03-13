import React from 'react'

function LikedSongRow({song}) {
  return (
    <div className = "flex items-center p-4 bg-[#1d1d1d] mt-[1vh] gap-2 cursor-pointer hover:bg-[#2b2a2a] rounded-lg">
        <div className = "flex items-center flex-1">
          <div className = "mr-2">{song.id}</div>
          <img className = "w-[5vh]" src={song.imgUrl} alt="" />
          <div className="songInfo ml-2 text-left">
            <div className = "mb-[0.1vh] mt-2 text-[#ffffff]">{song.songTitle}</div>
            <div className = "text-[#8d8d8d]">{song.songArtist}</div>
          </div>
        </div>
        <div className='flex-1 ml-[19vh] text-left text-[#8d8d8d]'>{song.songAlbum}</div>
        <div className='flex-1 ml-[1vh] text-left text-[#8d8d8d]'>{song.songAdded}</div>
        <div className='flex-1 -ml-[19vh] translate-x-[1vh] text-[#8d8d8d]'>{song.songDuration}</div>
    </div>
  )
}

export default LikedSongRow;