import React from 'react'
import BottomPlayer from '../components/BottomPlayer'
import SearchMain from '../components/SearchMain'
import Sidebar from '../components/Sidebar'

function Search() {
  return (
    <>
      <div className="flex">
          <Sidebar />
          <SearchMain />
        </div>
        
        <BottomPlayer />
    </>
  )
}

export default Search