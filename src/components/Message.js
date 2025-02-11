import React from 'react';

const Message = ({ onNext }) => {
  return (
    <div className="message-container">
      <h2>En vrai Luku ... </h2>
      <p>J'aime bien ton cul et ta vibe (je peux pas mieux faire comme déclaration) </p>
      <div className="images">
  <img src="/assets/Luku.JPG" alt="Luku au gala" className="luku-image" />
</div>
      <button className="next-button" onClick={onNext}>
        Pas moi pineapple
      </button>
    </div>
  );
};

export default Message;