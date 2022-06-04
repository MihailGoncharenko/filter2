import React from 'react';
import './App.css';

function IconSwitch({icon, onSwitch}) { 
  return (
    <button className='material-icons' onClick={onSwitch}>{icon}</button>
  )
}

export default IconSwitch;