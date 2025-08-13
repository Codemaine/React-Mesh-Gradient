import React, { useState, useEffect } from 'react';
import { MeshGradientRenderer } from '../lib';
import { Stats } from '@react-three/drei';
import './App.css';

function App() {
  const palettes = [
    ["#C3E4FF", "#6EC3F4", "#EAE2FF", "#B9BEFF", "#B3B8F9"],
    ["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900"],
  ];

  const [isWireframe, setIsWireframe] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [speed, setSpeed] = useState(0.01);
  const [isPaused, setIsPaused] = useState(false);
  const [pauseWhenNotInView, setPauseWhenNotInView] = useState(false);
  const [idleTime, setIdleTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading phase
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds fake load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <div className="gradient-container">
        <MeshGradientRenderer
          style={{ width: '100%', height: '100%' }}
          colors={palettes[colorIndex]}
          wireframe={isWireframe}
          speed={speed}
          paused={isPaused}
          pauseWhenNotInView={pauseWhenNotInView}
          idleTime={idleTime}
          backgroundColor={"#000000"}
          backgroundOpacity={0.8}
          loading={isLoading} // <-- NEW PROP
          onGradientClick={() => setColorIndex((colorIndex + 1) % palettes.length)}
        />
        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>Loading gradient...</p>
          </div>
        )}
        <div className="stats-container">
          <Stats />
        </div>
      </div>

      {/* Controls */}
      <div className="controls-container">
        <h1>React Mesh Gradient</h1>
        <p>Demonstrating loading, pausing, and dynamic palette switching.</p>
        <div className="control-group">
          <button onClick={() => setColorIndex((colorIndex + 1) % palettes.length)}>Switch Palette</button>
        </div>
        <div className="control-group">
          <label htmlFor="speed">Speed: {speed.toFixed(3)}</label>
          <input
            type="range"
            id="speed"
            min="0"
            max="0.1"
            step="0.001"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
          />
        </div>
        <div className="control-group">
          <input
            type="checkbox"
            id="wireframe"
            checked={isWireframe}
            onChange={() => setIsWireframe(!isWireframe)}
          />
          <label htmlFor="wireframe">Wireframe</label>
        </div>
        <div className="control-group">
          <button onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
        <div className="control-group">
          <input
            type="checkbox"
            id="pauseWhenNotInView"
            checked={pauseWhenNotInView}
            onChange={() => setPauseWhenNotInView(!pauseWhenNotInView)}
          />
          <label htmlFor="pauseWhenNotInView">Pause when not in view</label>
        </div>
        <div className="control-group">
          <label htmlFor="idleTime">Idle Time (seconds)</label>
          <input
            type="number"
            id="idleTime"
            value={idleTime}
            onChange={(e) => setIdleTime(parseInt(e.target.value, 10))}
          />
        </div>
        <footer>
          <p>Created by <a href="https://github.com/Codemaine" target="_blank" rel="noopener noreferrer">Codemaine</a></p>
          <p><a href="https://github.com/JohnnyLeek1/React-Mesh-Gradient" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
        </footer>
      </div>
      <div style={{ height: "200vh" }} />
    </div>
  );
}

export default App;