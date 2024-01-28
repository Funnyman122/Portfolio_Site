import React from 'react';
import './App.css';
import SocialLinks from './components/SocialLinks';
import ThreeDModel from './components/ThreeDModel';
import CustomPlayer from './components/CustomPlayer';
import ProgressiveText from './components/ProgressiveText';


function App() {
  return (
    <div className="App">
      <ProgressiveText />
      <ThreeDModel />
      <SocialLinks />
      <div className="username-tagline">
        <h1 style={{ color: 'green', textAlign: 'center' }}>NGC</h1>
        <p style={{ color: 'purple', textAlign: 'center' }}>The next generation is here</p>
      </div>
      <CustomPlayer 
        url="https://dl.dropboxusercontent.com/scl/fi/8vk934m5fftgt1stawsu9/spotifydown.com-DEMONS-IN-MY-SOUL.mp3?rlkey=crdr06f0p2vwhdyeragnju6h0"
        thumbnail="https://i.ibb.co/9YxJD4x/Screenshot-20231119-120007.png"
        title="DEMONS IN MY SOUL"
      />
    </div>
  );
}

export default App;
