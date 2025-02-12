import React from 'react';
import confetti from 'canvas-confetti';

const Download = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }, 
      colors: ['#ff9f68', '#ffc107', '#b3e5fc', '#ffccbc'], 
      shapes: ['circle', 'square'], 
    });
  };

  return (
    <div className="download-container">
      <a href="/assets/Pineapple's gift.pdf" download>
        <button
          className="download-button"
          onClick={handleConfetti} 
        >
          Pineapple's gift
        </button>
      </a>
    </div>
  );
};

export default Download;