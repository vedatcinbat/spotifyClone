import React from "react";
import GoodEvening from "./GoodEvening";
import Navbar from "./Navbar";
import NavbarSearch from "./NavbarSearch";
import Row from "./Row";
import SearchBox from "./SearchBox";

const items__RecentlyPlayed = [
  {
    imgUrl:
      "https://seed-mix-image.spotifycdn.com/v6/img/j_pop/1snhtMLeb2DYoMOcVbb8iB/en/default",
    title: "Kenshi Yonezu Mix",
    artists: "Artist Name ......",
  },
  {
    imgUrl: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
    title: "Liked Songs",
    artists: "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706c0000da84cc919157d9a962173f17ea34",
    title: "Korean Songs",
    artists: "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706c0000da84ceb8b6d42839c91b88d25e9b",
    title: "Top Japan Hits",
    artists: "Artist Name ......",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67706f000000025e81461d7898c4309ef0e02d",
    title: "Rock Classics",
    artists: "Artist Name ......",
  },
];

const items__BrowseAll = [
  {
    title: "Podcast",
    imgUrl: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
  },
  {
    title: "Live Events",
    imgUrl:
      "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
  },
  {
    title: "Made For You",
    imgUrl: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
  },
  {
    title: "New releases",
    imgUrl: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
  },
  {
    title: "Pop",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
  },
  {
    title: "Hip-Hop",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1",
  },
  {
    title: "Mood",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354",
  },
  {
    title: "Trending",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd",
  },
  {
    title: "Charts",
    imgUrl:
      "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
  },
  {
    title: "Dance",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
  },
  {
    title: "Rock",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e",
  },
  {
    title: "Indie",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
  },
  {
    title: "Workout",
    imgUrl: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
  },
  {
    title: "Discover",
    imgUrl: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
  },
  {
    title: "Country",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e",
  },
  {
    title: "R&B",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005cafbe6a6e705e1a71117c2d0c2c",
  },
  {
    title: "K-Pop",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a",
  },
  {
    title: "Chill",
    imgUrl: "https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170",
  },
];

function SearchMain() {
  return (
    <>
      <div className="flex text-white bg-[#121212] bg-gradient-to-b from-[#1c0141] to-[#121212] flex-col h-[90vh] w-[100%] overflow-scroll scrollbar-hide">
        <NavbarSearch />
        {/* Good Evening Section */}
        <div className="bottom__SearchMain p-[3vh]">
          <Row header="RecentlyPlayed" items={items__RecentlyPlayed} />
        </div>
        <div className="browseAll  p-4 grid grid-cols-5 gap-4">
          {items__BrowseAll.map((item) => {
            return (
              <SearchBox
                bgColor={item.bgColor}
                title={item.title}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchMain;
