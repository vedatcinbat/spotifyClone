import React from 'react'
import BottomPlayer from '../components/BottomPlayer'
import PlayList2Main from '../components/PlayList2Main'
import Sidebar from '../components/Sidebar'

function PlayList2() {
  return (
    <>
      <div className="flex">
          <Sidebar />
          <PlayList2Main />
        </div>
        
        <BottomPlayer />

    </>
  )
}

export default PlayList2