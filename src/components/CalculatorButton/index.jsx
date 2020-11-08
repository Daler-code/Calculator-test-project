import React from 'react';

import './styles.css';

import { basicOperators, specialOperators } from '../../consonants/operators';

const CalculatorButton = ({ onButtonClick, buttonKey }) => {

  const handleClick = (e) => {
    onButtonClick(e.target.textContent);
  };

  let classNames = [
    'btn',
    basicOperators.includes(buttonKey) ? 'btn-orange' : '',
    specialOperators.includes(buttonKey) ? 'btn-grey' : '',
    buttonKey === '0' ? 'btn-zero': ''
  ];

  return (
    <button 
      onClick={handleClick}
      className={classNames.join(' ').trim()}
    >
      { buttonKey }
    </button>
  )
};


export default CalculatorButton;