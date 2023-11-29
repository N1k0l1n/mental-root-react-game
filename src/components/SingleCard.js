import React from "react";
import "./SIngleCard.css";

export default function SingleCard({ card, handleChoise, flipped }) {
  const handleClick = (e) => {
    handleChoise(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
