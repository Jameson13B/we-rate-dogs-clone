import React from 'react';
import '../styles/DogPic.css';

const DogPic = props => {
  return (
    <div>
      {/* This checks for and renders a picture or feedback. If not renders loading. */}
      {props.src ? (
        <img src={props.src} alt='current-dog-pic' className='dog-pic' />
      ) : props.feedback ? null : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DogPic;
