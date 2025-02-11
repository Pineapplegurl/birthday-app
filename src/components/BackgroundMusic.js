import React, { useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; // Alterne entre muet et actif
      setIsMuted(!isMuted);
    }
  };

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