import logo from './logo.svg';
import './App.css';
import Video from './assets/videos/video.mp4'

function App() {
  return (
    <div className="Container">
      <div className='navbar'>
        <h2 className='navbar-icon'>BG</h2>
        <div className='navbar-items'>
          <p>Work</p>
          <p>About</p>
          <p>Resume</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='hero'>
        <div className='hero-div'>
          <h1 className='hero-title'>Hello 👋, I'm Brian a Software engineer, Innovator and Enterprenuer</h1>
          <p className='hero-subtitle'>I build perfomant websites and mobile apps using React</p>
        </div>
      </div>
      <div className='banner'>
      </div>
      <div className='work'>
        <h1 className='work-title'>Work</h1>
        <div></div>

      </div>
    </div>
  );
}

export default App;
