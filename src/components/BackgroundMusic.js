import React, { useRef, useState, useEffect } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Muted par défaut

  const handleToggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Désactive le mode mute et joue la musique
        audioRef.current.muted = false;
        audioRef.current.play().catch((err) => {
          console.error("Erreur lors de la lecture de l'audio :", err);
        });
      } else {
        // Active le mode mute
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      // Met la musique en sourdine par défaut
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