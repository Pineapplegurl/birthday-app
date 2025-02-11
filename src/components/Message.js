import React from 'react';

const Message = ({ onNext }) => {
  return (
    <div className="message-container">
      <h2>Bonheur, joie, santé et beaucoup de moula !! </h2>
      <div className="images">
  <img src="/assets/Luku.JPG" alt="Luku au gala" className="luku-image" />
  <p>P.S : I really like your vibe and your ass </p>
</div>
      <button className="next-button" onClick={onNext}>
        Moi aussi pineapple
      </button>
    </div>
  );
};

export default Message;