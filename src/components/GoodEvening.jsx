import React from 'react'
import GoodEveningBox from './GoodEveningBox'

function GoodEvening({header}) {
  return (
    <>
      <div className="header mb-[3vh]">
        <div className = "font-bold text-2xl">{header}</div>
      </div>
      <div className = "goodEvening grid grid-cols-3 grid-rows-2 gap-[2vh]">
        <GoodEveningBox img="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" text="Liked Songs" />
        <GoodEveningBox img="https://seed-mix-image.spotifycdn.com/v6/img/j_pop/1snhtMLeb2DYoMOcVbb8iB/en/default" text=" J-Pop Mix" />
        <GoodEveningBox img="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_tr_default.jpg" text=" Top 50-Turkey" />
        <GoodEveningBox img="https://i.scdn.co/image/ab67706c0000da84cc919157d9a962173f17ea34" text="soft korean songs" />
        <GoodEveningBox img="https://i.scdn.co/image/ab67706c0000da84ad7873a38a59380dcf1f070a" text=" 80s japanese city pop" />
        <GoodEveningBox img="https://seed-mix-image.spotifycdn.com/v6/img/artist/4UXqAaa6dQYAk18Lv7PEgX/tr/default" text="Fall Out Box Mix" />
    </div>
    </>
  )
}

export default GoodEvening