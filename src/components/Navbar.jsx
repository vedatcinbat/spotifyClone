import React from 'react'
import "./Navbar.css";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward"
function Navbar() {
  return (
    <div className = "navbar flex justify-between items-center w-[100%] bg-[#140141] text-white pl-[5vh] pr-[5vh]">
        {/* <img src="https://i.scdn.co/image/ab6775700000ee85972d425d65370e2561945fe4" alt="" /> */}
        <div className="leftPart  flex">
          <div className="backButton">
            <ArrowBack className = "border cursor-pointer hover:bg-[#2b2a2a] border-black rounded-full text-white scale-125 mr-[2.5vh] bg-black" />
          </div>
          <div className="nextButton">
            <ArrowForward className = "border cursor-pointer hover:bg-[#2b2a2a] border-black rounded-full text-white scale-125 bg-black"  />
          </div>
        </div>
        <div className="rightPart">
          <div className="profileButton cursor-pointer flex items-center bg-black hover:bg-[#222222] p-[1vh] rounded-[3vh] justify-between">
            <img className = "w-[4vh] rounded-full mr-[1vh]" src="https://i.scdn.co/image/ab6775700000ee85972d425d65370e2561945fe4" alt="" />
            <div className = "mr-1">Vedat</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar