import React, { useEffect, useState } from 'react';
import './css/card.css';

function MCard(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() =>{
    if(props.image_url){
      loadImage()
    }

  },[])
  function loadImage() {
    setImageLoaded(true);
  }

  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="card card-block">
          {/* Check if the image is loaded before displaying */}
          {imageLoaded ? (
            <img
            className='card-img-top img-size'
            src={`http://${process.env.REACT_APP_PUBLIC_IP}:5000/${props.image_url}`}
            alt="item-image"
            onError={() => console.error("Image failed to load")}
          />
          
          ) : (
            <div className="placeholder">Loading...</div>
          )}
          <div className="card-block">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              Spiciness: <u>{props.spiceness_level}</u>
            </p>
            <p>
              Vegetarian: <u>{props.vegetarian}</u>
            </p>
            <a href="#" className="btn btn-primary">
              {props.price}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCard;





// import React, { useState } from 'react';
// import './css/card.css';
// function MCard(props) {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   function loadImage() {
//     setImageLoaded(true);
//   }
//   return (
//     <>
//       <div class="row">
//         <div class="col-sm-3">
//           <div class="card card-block">
//           <img className='card-img-top' src={props.image_url} alt="item-image" />
//             {/* <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22318%22%20height%3D%22180%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3C!--%0ASource%20URL%3A%20holder.js%2F100px180%2F%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%23holder_153cdb63a13%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_153cdb63a13%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%2F%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.35%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"  data-holder-rendered="true" style="height: 180px; width: 100%; display: block;"/> */}
//             <div class="card-block">
//               <h4 class="card-title">{props.title}</h4>
//               <p class="card-text">{props.description}</p>
//               <p class="card-text">
//                 Spiceness: <u>{props.spiceness_level}</u>                
//               </p>
//               <p>
//               Vegiterian: <u>{props.vegetarian}</u>
//               </p>
//               <a href="#" class="btn btn-primary">{props.price}</a>

//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// }
// export default MCard;



{/* <div className="row">
        <div className="column">
          <div className="card">
            <h3>{props.title}</h3>
            <div>
            <div id="image">
              {imageLoaded ? (
                <img src={`${props.image_url}`} alt="My Image" />
              ) : (
                <button onClick={loadImage}>Load Image</button>
              )}
            </div>
            <p>{props.description}</p>
            <h4>
              <center>{props.price}</center>
            </h4>
            </div>
            <div className='bx-act'>
            <span><button className='M-Card-btn'>Buy</button><button className='M-Card-btn'>Cart</button></span>
            </div>
          </div>
        </div>
      </div> */}