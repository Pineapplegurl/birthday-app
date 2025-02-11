import React, { useState } from 'react';

const Ballons = ({ onComplete }) => {
  const [clickedBalloons, setClickedBalloons] = useState([]);

  const balloons = ['red', 'blue', 'green', 'yellow'];

  const handleBalloonClick = (index) => {
    if (!clickedBalloons.includes(index)) {
      setClickedBalloons([...clickedBalloons, index]);
    }

    // Si tous les ballons ont été cliqués, on passe à l'étape suivante
    if (clickedBalloons.length + 1 === balloons.length) {
      setTimeout(onComplete, 1000); // Petite pause avant de passer à l'étape suivante
    }
  };

  return (
    <div className="balloons-container">
      <h2> 24K MAGIC </h2>
      <div className="balloons">
        {balloons.map((color, index) => (
          <div
            key={index}
            className={`balloon balloon-${color} ${
              clickedBalloons.includes(index) ? 'fly-away' : ''
            }`}
            onClick={() => handleBalloonClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Ballons;