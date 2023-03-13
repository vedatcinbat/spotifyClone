import React from 'react'
import "./BottomPlayer.css";
import FavouriteIcon from "@material-ui/icons/Favorite";
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import RepeatIcon from '@material-ui/icons/Repeat';

import MicIcon from '@material-ui/icons/Mic';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function BottomPlayer() {
  return (
    <div className="bottomPlayer h-[10vh] bg-[#050505] text-white flex items-center">
        <div className="left-part flex items-center flex-1 ml-4">
          <div className="imgpart">
            <img className='w-[6vh]' src="https://i.scdn.co/image/ab67616d00004851ce51ffc5c742ed217779cb9d" alt="" />
          </div>
          <div className="titlepart ml-2 flex flex-col">
            <div className="title text-[1.7vh] cursor-pointer ">大不正解</div>
            <div className="artist text-[1.2vh] cursor-pointer text-[#8d8d8d]">back number</div>
          </div>
          <div className="iconpart mb-2 ml-2">
            <FavouriteIcon className = "text-[#8d8d8d] cursor-pointer hover:text-[#b1b0b0]" />
            <VideoLabelIcon className = "ml-2 text-[#8d8d8d] cursor-pointer hover:text-[#b1b0b0]" />
          </div>
        </div>
        <div className="center-part flex-1">
          <div className="centerUpper_part w-[50vh] ml-[10vh] mb-2 h-[4vh] items-center flex justify-evenly ">
            <ShuffleIcon className = "scale-100 ml-4 p-[0.5px] " />
            <SkipPreviousIcon className = "scale-125 mr-4 p-[0.4px]"  />
            <PlayCircleFilled className = "scale-150 mr-4 p-[0.2px]"   />
            <SkipNextIcon className = "scale-125 mr-4 p-[0.4px]"  />
            <RepeatIcon className = "scale-100 mr-4 p-[0.5px]"/>
          </div>
          <div className="centerBottom_part  items-center flex justify-evenly">
            <div className="numberfirst">
              <div>0:00</div>
            </div>
            <div className="rangePart">
              <div className = "w-[45vh] h-[0.6vh] bg-[#464646] rounded-[5vh]"></div>
            </div>
            <div className="numbersecond">
              <div>3:07</div>
            </div>
          </div>
        </div>
        <div className="right-part flex-1 flex justify-end items-center">
            <ShuffleIcon className = "scale-125 mr-4 cursor-pointer text-[#8d8d8d] hover:text-[#b1b0b0]" />
            <MicIcon className = "scale-125 mr-4 cursor-pointer text-[#8d8d8d] hover:text-[#b1b0b0]"  />
            <SubscriptionsIcon className = "scale-125 mr-4 cursor-pointer text-[#8d8d8d] hover:text-[#b1b0b0]"  />
            <DevicesOtherIcon className = "scale-125 mr-4 cursor-pointer text-[#8d8d8d] hover:text-[#b1b0b0]"  />
            <VolumeDownIcon className = "scale-125 mr-4 cursor-pointer text-[#8d8d8d] hover:text-[#b1b0b0]"  />
            <div className = "w-[15vh] h-[0.6vh] bg-[#27f720] rounded-[5vh] cursor-pointer mr-[5vh] text-[#8d8d8d] hover:text-[#b1b0b0]"></div>
            
        </div>
    </div>
  )
}

export default BottomPlayer