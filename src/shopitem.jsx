import React from 'react';
import './App.css';

function ShopItem({item, key}) {
  return (
    <div className='shopItem'>
      <div className='wrap_img'>
        <img src={item.img} alt='' />
      </div>
      <h1 className='heading'>{item.name}</h1>
      <p>{item.color}</p>
      <div className='price'>${item.price}</div>
      <button className='buttonCard'>Add to Cart</button>
    </div>
  );
}

export default ShopItem;