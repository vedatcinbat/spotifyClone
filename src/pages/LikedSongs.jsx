import React from 'react'
import BottomPlayer from '../components/BottomPlayer'
import MainLikedSongs from '../components/MainLikedSongs'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function LikedSongs() {
  return (
    <>
     <div className="flex">
          <Sidebar />
          
          <MainLikedSongs />
        </div>
        
        <BottomPlayer />

    </>
  )
}

export default LikedSongs