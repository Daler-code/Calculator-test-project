import React, {Fragment} from 'react';
import { connect } from 'react-redux';  
import { Textfit } from 'react-textfit';

import './styles.css';

const containerStyles = {
  flex: '0.5',
  flex: '0.5 1',
  display: 'flex',
  flexDirection: 'column'
};

const CalculatorScreen = ({ expression, total }) => {
  return (
    <Fragment style={containerStyles}>
      <Textfit
        max={40}
        throttle={60}
        mode="single"
        className="screen-top"
      >
        {expression}
      </Textfit>
      <Textfit
        max={150}
        mode="single"
        className="screen-bottom"
      >
        {total}
      </Textfit>
    </Fragment>
  )
};


const mapStateToProps = state => ({
  expression: state.calculatorReducer.expression,
  total: state.calculatorReducer.total
});

export default connect(mapStateToProps, null)(CalculatorScreen);