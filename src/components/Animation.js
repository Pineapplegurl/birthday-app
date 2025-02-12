import React, { useRef } from 'react';
import Confetti from 'react-confetti';


const Animation = ({ onCelebrate }) => {
  const audioRef = useRef(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Erreur lors de la lecture audio :", err);
      });
    }
    onCelebrate(); 
  };
  return (
    <div className="animation-container">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <h1 className="birthday-header">Happy Birthday Luku 🎉</h1>
      <button className="celebrate-button" onClick={handlePlayMusic}>
        Make a wish 🎂
      </button>
      <audio ref={audioRef} src="/assets/hbd.mp3" />
    </div>
  );
};
export default Animation;