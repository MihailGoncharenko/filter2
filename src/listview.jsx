import React from 'react';
import ShopItem from './shopitem';

function ListView({items}) { 
  let indexItem = 0;
  return (
    <div>
      {items.map((item) => (
        <ShopItem item={item} key={indexItem++} />
      ))}
    </div>
  );
}

export default ListView;