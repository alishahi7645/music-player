import React, { useState } from "react";
import './scss/app.scss';
import Soung from "./Component/Soung";
import Player from "./Component/Player";
import data from './data'
import SongList from "./Component/SongList";
import ToggleList from "./Component/ToggleList";
function App() {
  const [songs, setsong] = useState(data());
  const [coruntSongs, setcoruntSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const[displaysong,setdisplaysong]=useState(true);
  return (
    <div className="App">
      <ToggleList displaysong={displaysong} setdisplaysong={setdisplaysong}/>
      <Soung coruntSongs={coruntSongs} />
      <Player setsong={setsong}setcoruntSongs={setcoruntSongs} coruntSongs={coruntSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs}/>
      <SongList songs={songs} setcoruntSongs={setcoruntSongs} setsong={setsong} displaysong={displaysong}/>
    </div>
  );
}

export default App;
