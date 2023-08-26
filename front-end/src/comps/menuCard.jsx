import React, { useState } from 'react';
import './css/card.css';

function MCard(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  function loadImage() {
    setImageLoaded(true);
  }

  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card">
            <h3>{props.title}</h3>
            <div id="image">
              {imageLoaded ? (
                <img src={`./img/${props.title}.jpg`} alt="My Image" />
              ) : (
                <button onClick={loadImage}>Load Image</button>
              )}
            </div>
            <p>{props.detail}</p>
            <h4>
              <center>{props.price}</center>
            </h4>
            <span><button className='M-Card-btn'>Buy</button><button className='M-Card-btn'>Cart</button></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MCard;