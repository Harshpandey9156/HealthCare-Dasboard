import React from 'react';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  const cards = [
    { title: "Lungs", status: "Issue", date: "2025-05-20", color: "red" },
    { title: "Teeth", status: "Healthy", date: "2025-05-22", color: "green" },
    { title: "Bone", status: "Healthy", date: "2025-05-25", color: "green" },
  ];
  return (
    <div className="HealthStatusCards">
      {cards.map(card => (
        <div className="card" key={card.title} style={{ borderLeft: `4px solid ${card.color}` }}>
          <h3>{card.title}</h3>
          <p>{card.status}</p>
          <p>{card.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;