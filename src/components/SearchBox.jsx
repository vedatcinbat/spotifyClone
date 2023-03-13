import React from 'react'
import "./SearchBox.css";
function SearchBox({title, imgUrl, bgColor}) {
    
  return (
    <div className = "searchbox w-[35vh] h-[40vh] rounded-lg bg-[#121212] cursor-pointer hover:bg-[#292929]">
        <div className = "searchbox__title mt-2 ml-2 font-bold text-xl">{title}</div>
        <img className = "searchbox__image" src={imgUrl} />    
    </div>
  )
}

export default SearchBox