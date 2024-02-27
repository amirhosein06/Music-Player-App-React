import './App.css';
import { data } from './data';
import { useState } from 'react';

function Playlist(props) {
  function clickfon(e) {
    props.fonc(e.target.dataset.andis);
    props.fonc2();
    props.fonc3();
  }
  return (
    <ul>
    {data.map((item,index)=>(
       <li key={index} data-andis={index} onClick={clickfon}><span><img src={item.cover} alt="music cover" /></span>
       <div>
       <h6>{item.name}</h6>
       <p>{item.artist}</p>
       </div>
       </li>
    ))}
    </ul>
  )
}

function App() {
  const [dataandis, setdataandis] = useState(0);
  const [index, setindex] = useState("0");
  const [playlistnum, setplaylistnum] = useState("0");
  const [invalmax, setinvalmax] = useState("0");
  const [inputval, setinputval] = useState(0);
  const [likenum, setlikenum] = useState("0");

  function playandstop() {
    const audiotag = document.querySelectorAll("audio");
    const playbtn = document.querySelectorAll(".playbtn img");
    const cover = document.querySelectorAll(".cover span");

    if (index === "0") {
      playbtn[0].src = "icon/pause-solid.svg";
      audiotag[0].play();
      cover[0].style.animation = "17s animit infinite linear";
      setindex("1");
      //timline
      var intervalfonc = setInterval(() => {
        setinputval(audiotag[0].currentTime);
      }, 300);
    }else{
      playbtn[0].src = "icon/play-solid.svg";
      audiotag[0].pause();
      cover[0].style.animation = "none";
      setindex("0");
      clearInterval(intervalfonc);
    }
  }

  function openplaylist() {
    const target = document.querySelectorAll(".play_list");
    const icon = document.querySelectorAll(".pl_btn img");
    if (playlistnum === "0") {
      target[0].style.top = "25%";
      icon[0].style.rotate = "180deg";
      setplaylistnum("1");
    }
  }
  function closeplaylist() {
    const target = document.querySelectorAll(".play_list");
    const icon = document.querySelectorAll(".pl_btn img");
    if (playlistnum === "1") {
      target[0].style.top = "100%";
      icon[0].style.rotate = "0deg";
      setplaylistnum("0");
    }
  }

  function changeandis(andis) {
    setdataandis(andis);
  }
  function nextandis() {
    if (dataandis < data.length-1) {
      setdataandis(dataandis +1);
      if (index === "0") {
        playandstop();
      }
    }
  }
  function bacandi() {
    if (dataandis > 0) {
      setdataandis(dataandis -1);
      const audiotag = document.querySelectorAll("audio");
      audiotag[0].currentTime = 0;
      setinputval(0);
      if (index === "0") {
        playandstop();
      }
    }
  }
  function randomandis() {
    const random = Math.floor(Math.random() * data.length)
      setdataandis(random);
      playandstop();
  }

  function changeaudiotime() {
    const audiotag = document.querySelectorAll("audio");
    setinvalmax(audiotag[0].duration);
  }

  function changetimlinetime(e) {
    const audiotag = document.querySelectorAll("audio");
    audiotag[0].currentTime = e.target.value;
    setinputval(e.target.value);
    if (index === "0") {
      playandstop();
    }
  }

  function likeclick(e) {
    if (likenum === "0") {
      setlikenum("1");
      e.target.src = "icon/thumbs-up-solid.svg";
    }
    if (likenum === "1") {
      setlikenum("0");
      e.target.src = "icon/thumbs-up-regular.svg";
    }
  }

  return (
    <div className="App">

      <div className="play_list"><Playlist fonc={changeandis} fonc2={closeplaylist} fonc3={playandstop}/></div>

      <div className="player"  onClick={closeplaylist}>
        <div className="pl_btn" onClick={openplaylist}><img src="icon/chevron-down-solid.svg"/>Open play list<img src="icon/ellipsis-solid.svg"/></div>

        <div className="cover"><span><img src={data[dataandis].cover} alt="music cover" /></span></div>
      <audio onLoadedMetadata={changeaudiotime} onEnded={playandstop}>
      <source src={data[dataandis].src} type="audio/mpeg"/>
      </audio>

      <div className="information">
        <div className="name">{data[dataandis].name}</div>
        <div className="artist">{data[dataandis].artist}</div>
      </div>

      <input type="range" className="timline" value={inputval} max={invalmax} onChange={changetimlinetime}/>
      <div className="controls">
      <button className="randombtn" onClick={randomandis}><img src="icon/shuffle-solid.svg"/></button>
      <button className="bacbtn" onClick={bacandi}><img src="icon/backward-solid.svg"/></button>
        <span className="playbtn" onClick={playandstop}><img src="icon/play-solid.svg"/></span>
        <button className="nextbtn" onClick={nextandis}><img src="icon/forward-solid.svg"/></button>
        <button className="starbtn"><img src="icon/thumbs-up-regular.svg" onClick={likeclick}/></button>

      </div>
      </div>
    </div>
  );
}

export default App;
