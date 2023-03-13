import React from 'react'
import AccessTime from "@material-ui/icons/AccessTime";
import LikedSongRow from './LikedSongRow';
import "./LikedSongList.css"
const likedSongs = [
    {
        id : "1",
        imgUrl : "https://i.scdn.co/image/ab67616d000048511ddfc314e75833536fdc5d03",
        songTitle : "シーソーゲーム~勇敢な恋の歌~",
        songArtist : "Mr.Children",
        songAlbum : "BOLERO",
        songAdded : "1 day ago",
        songDuration : "4:29",
    },
    {
        id : "2",
        imgUrl : "https://i.scdn.co/image/ab67616d000048513408a925e0bcb7940f864a0e",
        songTitle : "Grace Kelly",
        songArtist : "MIKA",
        songAlbum : "Life In Cartoon Motion",
        songAdded : "2 days ago",
        songDuration : "3:07",
    },
    {
        id : "3",
        imgUrl : "https://i.scdn.co/image/ab67616d000048513408a925e0bcb7940f864a0e",
        songTitle : "Relax, Take It Easy",
        songArtist : "MIKA",
        songAlbum : "Life In Cartoon Motion",
        songAdded : "5 days ago",
        songDuration : "4:30",
    },
    {
        id : "4",
        imgUrl : "https://i.scdn.co/image/ab67616d00004851bde344cc54eedc35050f4c61",
        songTitle : "Drive By",
        songArtist : "Train",
        songAlbum : "California 37",
        songAdded : "5 days ago",
        songDuration : "3:15",
    },
    {
        id : "5",
        imgUrl : "https://i.scdn.co/image/ab67616d000048512c34b754c9f4fb50c37e6982",
        songTitle : "水平線",
        songArtist : "back number",
        songAlbum : "水平線",
        songAdded : "1 week ago",
        songDuration : "4:45",
    },
    {
        id : "6",
        imgUrl : "https://i.scdn.co/image/ab67616d00004851c5993ff2f059a0a5a7f6270b",
        songTitle : "祝福",
        songArtist : "YOASOBI",
        songAlbum : "祝福",
        songAdded : "1 week ago",
        songDuration : "3:16",
    },
    {
        id : "7",
        imgUrl : "https://i.scdn.co/image/ab67616d000048511d7b1035c7d642b765605144",
        songTitle : "Good Morning World",
        songArtist : "BURNOUT SYNDROMES",
        songAlbum : "Good Morning World",
        songAdded : "2 weeks ago",
        songDuration : "4:09",
    },
    {
        id : "8",
        imgUrl : "https://i.scdn.co/image/ab67616d000048512016a5cf5888dbfd036872e6",
        songTitle : "Stamp On The Ground",
        songArtist : "ItalioBrothers",
        songAlbum : "Stamp!",
        songAdded : "2 weeks ago",
        songDuration : "3:17",
    },
    {
        id : "9",
        imgUrl : "https://i.scdn.co/image/ab67616d00004851cfd93d36fe2365f9436587d1",
        songTitle : "悲しみがとまらない I CAN'T STOP THE LONELINESS",
        songArtist : "Anri",
        songAlbum : "Timely!",
        songAdded : "3 weeks ago",
        songDuration : "4:23",
    },
    {
        id : "10",
        imgUrl : "https://i.scdn.co/image/ab67616d00004851596368082712ceff7ae95649",
        songTitle : "Bella",
        songArtist : "GIMS",
        songAlbum : "Subliminal (La face cachée)",
        songAdded : "4 weeks ago",
        songDuration : "3:46",
    },
    {
        id : "11",
        imgUrl : "https://i.scdn.co/image/ab67616d00004851e524693aba8849958b1f7e39",
        songTitle : "Est-ce que tu m'aimes ? - Pilule bleue",
        songArtist : "GIMS",
        songAlbum : "Mon coeur avait raison",
        songAdded : "4 weeks ago",
        songDuration : "3:57",
    },
    {
        id : "12",
        imgUrl : "https://i.scdn.co/image/ab67616d000048516101e08696469c595f25deee",
        songTitle : "I LOVE YOU feat.有華",
        songArtist : "kobasolo,有華",
        songAlbum : "これくしょん2",
        songAdded : "4 weeks ago",
        songDuration : "5:14",
    },
    {
        id : "13",
        imgUrl : "https://i.scdn.co/image/ab67616d00004851b3adccb3e66a3f8447564c62",
        songTitle : "怪物さん",
        songArtist : "Ken Hirai,Aimyon",
        songAlbum : "怪物さん",
        songAdded : "4 weeks ago",
        songDuration : "4:04",
    },
    {
        id : "14",
        imgUrl : "https://i.scdn.co/image/ab67616d00004851783ed3c2af46af7ab7c671c0",
        songTitle : "高嶺の花子さん",
        songArtist : "back number",
        songAlbum : "ラブストーリー",
        songAdded : "4 weeks ago",
        songDuration : "4:54",
    },
    {
        id : "15",
        imgUrl : "https://i.scdn.co/image/ab67616d0000485119d85a472f328a6ed9b704cf",
        songTitle : "Feel Good Inc.",
        songArtist : "Gorillaz",
        songAlbum : "Demon Days",
        songAdded : "Dec 6, 2022",
        songDuration : "3:42",
    },
]

function LikedSongList() {
  return (
    <>
        <div className="likedsonglist flex flex-col  ">
            <div className="colNames flex text-center items-center justify-between mt-4">
                <div className = "flex-1 ">Title</div>
                <div className = "flex-1">Album</div>
                <div className = "flex-1">Date Added</div>
                <AccessTime  className = "flex-1" />
            </div>
            <div className="allLikedSongs flex flex-col text-center pl-[4vh] pr-[4vh] mt-2">
                {likedSongs.map((song) => {
                    return (
                        <LikedSongRow song = {song} />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default LikedSongList