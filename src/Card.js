import React, { Component } from 'react';
import 'tachyons';

const Card = ({name, email, id}) => {
  // const { name, email, id} = props //destructuring
  return (
    <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}*2?150x150`} alt='robot'/>

      <div className='tc'>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  )
}

export default Card;
