import  { React,useState } from 'react';
import "./css/card.css"




function MCard(props) {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // function loadImage(title) {
  //   import(title)
  //     .then((image) => {
  //       setImageLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error('Error loading image:', error);
  //     });
  // }

  let img = './' + props.title + '.jpg';

  
  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card">
            <h3>{props.title}</h3>
            <div id='image'>
                <img src={img} alt="My Image" />
              {/* {imageLoaded ? (
              ) : (
                <button onClick={() => loadImage(img)}>Load Image</button>
              )} */}
            </div>
            <p>{props.detail}</p>
            <h4><center>{props.price}</center></h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MCard;
