import React from 'react'
import BottomPlayer from '../components/BottomPlayer';
import HomeMain from '../components/HomeMain';
import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar';
import "./Home.css";
function Home() {
  return (
    <>
        {/* <TopNavbar /> */}
        <div className="flex">
          <Sidebar />
          <HomeMain />
        </div>
        
        <BottomPlayer />
        

    </>
  )
}

export default Home