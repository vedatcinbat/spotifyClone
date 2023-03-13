import React from 'react'
import BottomPlayer from '../components/BottomPlayer'
import Sidebar from '../components/Sidebar'
import YourLibraryMain from '../components/YourLibraryMain'

function YourLibrary() {
  return (
    <>
      <div className="flex">
          <Sidebar />
          <YourLibraryMain />
        </div>
        
        <BottomPlayer />
    </>
  )
}

export default YourLibrary