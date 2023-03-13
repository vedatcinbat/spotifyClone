import React from 'react'
import GoodEvening from './GoodEvening'
import Navbar from './Navbar'
import Row from './Row'

const username = "xeobn8r1hszc1lmpgrch3wusr";

const items__JumpBackIn = [
  {
    imgUrl: "https://dailymix-images.scdn.co/v2/img/ab67616d0000b273cfd93d36fe2365f9436587d1/3/en/default",
    title : "Daily Mix 3",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb655ca8f3196953554b479452/2/en/default",
    title : "Daily Mix 2",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://seed-mix-image.spotifycdn.com/v6/img/pop/5MmVJVhhYKQ86izuGHzJYA/en/default",
    title : "Pop Mix",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1snhtMLeb2DYoMOcVbb8iB/en/default",
    title : "Kenshi Yonezu Mix",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://seeded-session-images.scdn.co/v1/img/artist/5WBO8UyOuJ1l7ZBqqBimpO/en",
    title : "YUI Radio",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706f00000002205fbddafb198ab9534b7d62",
    title : "Türkçe 90'lar",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://mosaic.scdn.co/300/ab67616d00001e0226f7f19c7f0381e56156c94aab67616d00001e0227ddd747545c0d0cfe7595faab67616d00001e026a6387ab37f64034cdc7b367ab67616d00001e02c6710b4a52539506c30e5354",
    title : "2000's Party Hits",
    artists : "Artist Name ......",
  },
]

const items__MadeForYou = [
  {
    imgUrl: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/ROMn71zXeQEAuSmLA9f-HaiTmH7uARrOg1YEX98gjv0hC78tweYEFqT4Tw4UG-OnygiWlZbzUnWPMYN3g_UBlBFXT8DBesd2Vud71UBh-BQ=/MTI6MTI6OTBUMjItMzAtMw==",
    title : "Disvover Weekly",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb472c006249f94976f9635974/1/en/default",
    title : "Daily Mix 1",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/4/en/default",
    title : "Daily Mix 2",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebba14e4d9cd2cb6a97ed071d2/5/en/default",
    title : "Release Radar",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc4c77549095c86acb4e77b37/6/en/default",
    title : "You Liked Most",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5ebba14e4d9cd2cb6a97ed071d2/en",
    title : "Tavern/Folk Music",
    artists : "Artist Name ......",
  },
];
const items__RecentlyPlayed = [
  {
    imgUrl: "https://seed-mix-image.spotifycdn.com/v6/img/j_pop/1snhtMLeb2DYoMOcVbb8iB/en/default",
    title : "Kenshi Yonezu Mix",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
    title : "Liked Songs",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706c0000da84cc919157d9a962173f17ea34",
    title : "Korean Songs",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706c0000da84ceb8b6d42839c91b88d25e9b",
    title : "Top Japan Hits",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706f000000025e81461d7898c4309ef0e02d",
    title : "Rock Classics",
    artists : "Artist Name ......",
  },
]
const items__Throwbacks = [
  {
    imgUrl: "https://i.scdn.co/image/ab67706f000000026e65f020506feb291e366012",
    title : "Turkish 2000's",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706f000000025e81461d7898c4309ef0e02d",
    title : "Rock Classics",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706f00000002ae6f51a8f53fbe34e627baac",
    title : "All Out 2000s",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
    title : "All Out 2010s",
    artists : "Artist Name ......",
  },
  {
    imgUrl: "	https://i.scdn.co/image/ab67706f000000023e882e6692f69af28ce96295",
    title : "00s Metal Classics",
    artists : "Artist Name ......",
  },
]

function HomeMain() {
  return (
    <>
    <div className = "flex text-white bg-[#121212] bg-gradient-to-b from-[#1c0141] to-[#121212] flex-col h-[90vh] w-[100%] overflow-scroll scrollbar-hide">
        <Navbar />
        {/* Good Evening Section */}
        <div className="bottom__HomeMain p-[3vh]">
          <GoodEvening header="GoodEvening" />
          {/* Jump Back In */}
          <Row header = "JumpBackIn" items={items__JumpBackIn} />
          {/* Made for Vedat */}
          <Row header = "MadeForVedat"  items={items__MadeForYou}/>
          {/* Recently Played */}
          <Row header = "RecentlyPlayed" items={items__RecentlyPlayed} />
          {/* Throwbacks */}
          <Row header = "Throwbacks"  items={items__Throwbacks} />
        </div>
    </div>
    </>
  )
}

export default HomeMain