import React from "react";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import "./Row.css"
function Row({ header, items }) {
  console.log(items);

  return (
    <>
      <div className="container">
        <div className="row__header">
          <div className="mt-[2vh] mb-[1vh] text-[3.5vh] font-bold">
            {header}
          </div>
        </div>
        <div className="songBox w-[106%] grid grid-cols-8 gap-[10vh]">
          {items.map((item) => {
            return (
              <div className="flex bg-[#1d1d1d] h-[35vh] rounded-lg w-[22vh] m-1 flex-col justify-between items-center text-center p-2 hover:bg-[#313131] cursor-pointer transition-all duration-200">
                <img src={item.imgUrl} className="w-[22vh] h-[22vh]" alt="" />
                <div className="font-bold text-[2.5vh]">{item.title}</div>
                <div className="text-[#929292] text-[1.8vh]">
                  {item.artists}
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </>
  );
}

export default Row;
