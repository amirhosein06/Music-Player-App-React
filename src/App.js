import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [index, setindex] = useState("0");
  const [inval, setinval] = useState("0");
  const [audiotags, setaudiotags] = useState(document.querySelectorAll("audio"));
  const [range, setrange] = useState(document.querySelectorAll("input"));
  function playandstop() {
    const audiotag = document.querySelectorAll("audio");
    const playbtn = document.querySelectorAll(".playbtn img");
    if (index === "0") {
      playbtn[0].src = "icon/pause-solid.svg";
      audiotag[0].play();
      setindex("1");
    }else{
      playbtn[0].src = "icon/play-solid.svg";
      audiotag[0].pause();
      setindex("0");
    }
  }

  function sincval() {
    // range[0].max = audiotags[0].duration;
    // range[0].value = audiotags[0].currentTime;
  }

  // function playsong() {
  //       const interval = setInterval(() => {
  //     if (audiotags[0].play()) {
  //     range[0].value = audiotags[0].currentTime;
  //     }
  //     if (audiotags[0].pause()) {
  //       clearInterval(interval);
  //     }
  //   }, 500);
  // }

  return (
    <div className="App">

      <div className="play_list"></div>

      <div className="player">
        <div className="pl_btn"><img src="icon/chevron-down-solid.svg"/>Open play list<img src="icon/ellipsis-solid.svg"/></div>

        <div className="cover"><span><img src={data[0].cover} alt="music cover" /></span></div>
      <audio controls autoplay onLoadedMetadata={sincval}>
      <source src="assets/Afshin Moghadam-Zemestoon.mp3" type="audio/mpeg"/>
      </audio>

      <div className="information">
        <div className="name">{data[0].name}</div>
        <div className="artist">{data[0].artist}</div>
      </div>

      <input type="range" className="timline" value="0"/>
      <div className="controls">
      <button className="randombtn"><img src="icon/shuffle-solid.svg"/></button>
      <button className="bacbtn"><img src="icon/backward-solid.svg"/></button>
        <span className="playbtn" onClick={playandstop}><img src="icon/play-solid.svg"/></span>
        <button className="nextbtn"><img src="icon/forward-solid.svg"/></button>
        <button className="starbtn"><img src="icon/thumbs-up-regular.svg"/></button>

      </div>
      </div>
    </div>
  );
}

export default App;
