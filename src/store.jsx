import React, { useState } from 'react';
import IconSwitch from './iconswitch';
import CardsView from './cardsview';
import ListView from './listview';

function Store({products}) {
  const [icon, setIcon] = useState('view_list');
  function handleSwitch() {
    if (icon === 'view_list') {
        return setIcon('view_module');
    }
    if (icon === 'view_module') {
        return setIcon('view_list');
    }
  }
  return (
    <div>
      <IconSwitch icon={icon} onSwitch={handleSwitch} />
      <main>
        {icon === 'view_list' ? <CardsView cards={products} /> : <ListView items={products} /> }
      </main>
    </div>
  );
}

export default Store;