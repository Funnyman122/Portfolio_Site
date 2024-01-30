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
  
    </div>
  );
}

export default App;
