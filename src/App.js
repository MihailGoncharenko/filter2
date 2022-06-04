import React from 'react';
import Store from './store';
import products from './images'


function App() {
  return (
    <div className='App'>
      <Store products={products} />
    </div>
  );
}

export default App;