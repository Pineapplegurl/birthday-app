import React from 'react';
import confetti from 'canvas-confetti';

const Download = () => {
  const handleConfetti = () => {
    // Déclenche des confettis personnalisés
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }, // Point d'origine légèrement plus bas
      colors: ['#ff9f68', '#ffc107', '#b3e5fc', '#ffccbc'], // Couleurs pastel personnalisées
      shapes: ['circle', 'square'], // Formes des confettis
    });
  };

  return (
    <div className="download-container">
      <a href="/assets/cadeau.pdf" download>
        <button
          className="download-button"
          onClick={handleConfetti} // Déclenche les confettis au clic
        >
          Pineapple's gift
        </button>
      </a>
    </div>
  );
};

export default Download;