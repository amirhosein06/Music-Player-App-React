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
        <div className="pl_btn"> open play list</div>
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
      <button className="randombtn">r</button>
      <button className="bacbtn">b</button>
        <button className="playbtn" onClick={playandstop}>p</button>
        <button className="nextbtn">n</button>
        <button className="starbtn">s</button>

      </div>
      </div>
    </div>
  );
}

export default App;
