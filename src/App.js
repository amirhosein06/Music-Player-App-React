import logo from './logo.svg';
import './App.css';

function App() {
  function playandstop() {
    const audiotag = document.querySelectorAll("audio");
    audiotag[0].play();
  }
  return (
    <div className="App">

      <div className="play_list"></div>

      <div className="player">
        <div className="pl_btn"><img src="icon/chevron-down-solid.svg"/>Open play list<img src="icon/ellipsis-solid.svg"/></div>

        <div className="cover"><img src="..." alt="music cover" /></div>
      <audio controls autoplay>
      <source src="assets/Afshin Moghadam-Zemestoon.mp3" type="audio/mpeg"/>
      </audio>

      <div className="information">
        <span className="name">mame</span>
        <span className="artist">artist</span>
      </div>

      <input type="range" className="timline" value="0"/>
      <div className="controls">
      <button className="randombtn"><img src="icon/shuffle-solid.svg"/></button>
      <button className="bacbtn"><img src="icon/backward-solid.svg"/></button>
        <button className="playbtn" onClick={playandstop}><img src="icon/play-solid.svg"/></button>
        <button className="nextbtn"><img src="icon/forward-solid.svg"/></button>
        <button className="starbtn"><img src="icon/thumbs-up-regular.svg"/></button>

      </div>
      </div>
    </div>
  );
}

export default App;
