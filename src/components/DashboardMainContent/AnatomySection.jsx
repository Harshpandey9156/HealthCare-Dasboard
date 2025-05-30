import React from 'react';
import './AnatomySection.css';
import anatomyImage from '/src/assets/download.jpeg'; 

const AnatomySection = () => {
  return (
    <div className="AnatomySection">
      <img src={anatomyImage} alt="Human Anatomy" />
      <ul className="health-indicators">
        <li className="healthy">Heart - Healthy</li>
        <li className="issue">Lungs - Issue</li>
        <li className="healthy">Teeth - Healthy</li>
        <li className="healthy">Bone - Healthy</li>
      </ul>
    </div>
  );
};

export default AnatomySection;