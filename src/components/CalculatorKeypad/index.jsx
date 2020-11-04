import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

// Actions
import { calculate } from '../../redux/modules/calculator/calculatorAction';
import { clear } from '../../redux/modules/calculator/calculatorAction';
import { evaluate } from '../../redux/modules/calculator/calculatorAction';
import { deleteLastEntry } from '../../redux/modules/calculator/calculatorAction';
import { sqrtExpression } from '../../redux/modules/calculator/calculatorAction';
import { exponentiation } from '../../redux/modules/calculator/calculatorAction';

import { keypadKeys } from '../../consonants/keypadKeys';
import CalculatorButton from '../CalculatorButton';


const CalculatorKeypad = ({ 
  deleteLastEntry, 
  clear, 
  calculate, 
  evaluate, 
  sqrtExpression,
  exponentiation
}) => {

  const handleClick = (key) => {
    switch (key) {
      case 'c':
        clear()
        break
      case 'Del':
        deleteLastEntry()
        break
      case '=':
        evaluate()
        break
      case '√':
        sqrtExpression(key)
      case '**':
        exponentiation(key)
      default:
        calculate(key)
        break
    }
  };

  return (
    <div className="keypad">
    {
      keypadKeys.map((block, index) => {
        return (
          <div key={index} className="block">
            {
              block.map(key => (
                <CalculatorButton
                  key={key}
                  onButtonClick={handleClick}
                  buttonKey={key}
                />
              ))
            }
          </div>
        )
      })
    }
  </div>
  )
};


const mapDispatchToProps = dispatch => ({
  calculate: (key) => dispatch(calculate(key)),
  sqrtExpression: (key) => dispatch(sqrtExpression(key)),
  exponentiation: (key) => dispatch(exponentiation(key)),
  clear: () => dispatch(clear()),
  deleteLastEntry: () => dispatch(deleteLastEntry()),
  evaluate: () => dispatch(evaluate())
});

export default connect(null, mapDispatchToProps)(CalculatorKeypad);