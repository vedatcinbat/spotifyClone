import React from 'react'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import "./Navbar.css";

function GoodEveningBox({img, text}) {
  return (
    <div className = "h-[11vh] goodEveningBox w-auto bg-gradient-to-r cursor-pointer hover:bg-[#55555594] transition-colors duration-300 ease-in from-[#2c2c2c94] to-[#57575781] flex items-center rounded-[1vh] justify-between">
        <div className="left-part flex items-center">
            <img className = "h-[11vh] w-[11vh] imgGoodEvening" src={img} />
            <div className="title text-xl ml-2 font-bold">{text}</div>
        </div>
        <div className="right-part mr-[2vh]">
            <PlayCircleFilled className = "iconPlayer bg-white scale-150  rounded-full text-black" />
        </div>
    </div>
  )
}

export default GoodEveningBox