import React from "react";
import './SIngleCard.css'


export default function SingleCard({card}) {
  return (
    <div className="card">
      <div>
        <img src={card.src} alt="card front" className="front" />
        <img src="/img/cover.png" alt="card back" className="back" />
      </div>
    </div>
  );
}
