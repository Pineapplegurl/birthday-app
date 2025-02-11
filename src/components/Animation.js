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
    onCelebrate(); // Passe à l'étape suivante après avoir activé la musique
  };

  return (
    <div className="animation-container">
      {/* Confetti couvrant tout l'écran */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* Titre principal */}
      <h1 className="birthday-header">Happy Birthday Luku 🎉</h1>

      {/* Bouton pour lancer la musique et avancer */}
      <button className="celebrate-button" onClick={handlePlayMusic}>
        Make a wish 🎂
      </button>

      {/* Élément audio caché */}
      <audio ref={audioRef} src="/assets/hbd.mp3" />
    </div>
  );
};

export default Animation;