import React from 'react'
import LikedSongList from './LikedSongList'
import Navbar from './Navbar'
import PlayListMain from './PlayListMain'

function MainLikedSongs() {
  return (
    <div className = "bg-[#121212] text-white w-full h-[90vh] overflow-scroll scrollbar-hide">
        <Navbar />
        <PlayListMain />
        <LikedSongList />
    </div>
  )
}

export default MainLikedSongs