import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "../src/pages/Home";
import LikedSongs from "../src/pages/LikedSongs";
import PlayList1 from "../src/pages/PlayList1";
import PlayList2 from "../src/pages/PlayList2";
import YourLibrary from "../src/pages/YourLibrary";
import { BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';


function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/Search" element = {<Search />} />
          <Route path = "/LikedSongs" element = {<LikedSongs />} />
          <Route path = "/PlayList1" element = {<PlayList1 />} />
          <Route path = "/PlayList2" element = {<PlayList2 />} />
          <Route path = "/YourLibrary" element = {<YourLibrary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
