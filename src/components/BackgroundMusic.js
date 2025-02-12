import React, { useRef, useState, useEffect } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Muted par défaut

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true; 
    }
  }, []);

  return (
    <div className="music-button-container">
      <audio ref={audioRef} src="/assets/hbd.mp3" autoPlay loop />
      <button className="music-button" onClick={handleToggleMute}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
};

export default BackgroundMusic;