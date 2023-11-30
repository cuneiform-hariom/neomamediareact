import React, { useState, useRef } from 'react';

const Video = () => {
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const heroVideoRef = useRef();

  const handleMouseMove = (e) => {
    const x = e.clientX - heroVideoRef.current.getBoundingClientRect().left + 10;
    const y = e.clientY - heroVideoRef.current.getBoundingClientRect().top + 10;

    setButtonPosition({ left: x, top: y });
  };

  const togglePlayPause = () => {
    const video = heroVideoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{position: "relative"}} className='videosection'>
      <video src={require("../assets/neomamedia.mp4")} loop autoPlay muted ref={heroVideoRef}
        style={{ width: '100%', height: 'auto' }}
        onMouseMove={handleMouseMove} 
      />

      <button className='playbtn'
        style={{ position: 'absolute', left: `${buttonPosition.left}px`, top: `${buttonPosition.top}px`, outline: 'none', border:'none' }}
        onClick={togglePlayPause}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <div onMouseMove={handleMouseMove} style={{ position: 'relative' }}>
      </div>
    </div>
  );
};

export default Video;
