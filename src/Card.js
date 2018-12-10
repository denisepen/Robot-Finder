import React, { Component } from 'react';
import 'tachyons';

const Card = (props) => {
  return (
    <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${props.id}?150x150`} alt='robot'/>

      <div className='tc'>
        <h2> {props.name} </h2>
        <p> {props.email} </p>
      </div>
    </div>
  )
}

export default Card;
