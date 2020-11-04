import React from 'react';

import { Component, Container } from './styles';

// comp.
import CalculatorScreen from '../CalculatorScreen';
import CalculatorKeypad from '../CalculatorKeypad';

class Calculator extends React.Component {

  // mount the component for test
  componentDidMount () {
    console.log('calculator mounted');
  };

  render () {
    return (
      <Container>
        <Component>
          <CalculatorScreen />
          <CalculatorKeypad />
        </Component>
      </Container>
    )
  }
};

export default Calculator;