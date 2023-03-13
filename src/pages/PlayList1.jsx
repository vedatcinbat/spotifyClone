import React from 'react'
import BottomPlayer from '../components/BottomPlayer'
import PlayList1Main from '../components/PlayList1Main'
import Sidebar from '../components/Sidebar'

function PlayList1() {
  return (
    <>
      <div className="flex">
          <Sidebar />
          <PlayList1Main />
        </div>
        
        <BottomPlayer />

    </>
  )
}

export default PlayList1