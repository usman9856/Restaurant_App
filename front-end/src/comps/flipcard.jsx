import React, { useState } from 'react';
import './css/FlipCard.css'; // You can create a CSS file for styling

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleFlipButtonClick = (event) => {
    event.stopPropagation(); // Prevent the card from flipping when the button is clicked
    setIsFlipped(true); // Flip the card
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="input-section">
            {frontContent}
          </div>
          <button className="flip-button next-button"  type='button' onClick={handleFlipButtonClick}>Next ➡</button>
        </div>
        <div className="flip-card-back">
          {backContent}
          <button className="flip-button back-button" type='button' onClick={handleCardClick}>⬅ Back</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;







// import React, { useState } from 'react';
// import './css/FlipCard.css'; // You can create a CSS file for styling

// const FlipCard = ({ frontContent, backContent }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleCardClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
//       <div className="flip-card-inner">
//         <div className="flip-card-front">
//           {frontContent}
//         </div>
//         <div className="flip-card-back">
//           {backContent}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCard;
