import React from 'react';
import './App.css';

function ShopCard({card, key}) {
  return (
    <div className='shopCard'>
      <h1 className='heading'>{card.name}</h1>
      <p>{card.color}</p>
      <img src={card.img} alt='' />
      <div className='card'>
        <div className='price'>${card.price}</div>
        <button className='buttonCard'>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;