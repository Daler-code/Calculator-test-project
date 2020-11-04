import actionTypes from '../../../consonants/actionTypes';

import calculate from '../../../utils/calculate';

let initialState = {
  expression: '',
  total: 0
};


function setExpression({ expression, total}, action) {

  if (
    /[\d]*[-+%*/.]$/.exec(expression) &&
    /[-+%*/.]/.exec(action.payload)
  ) {
    console.log('b', expression);
    expression = expression.slice(0, expression.length - 1)
    console.log('a', expression);
  }

  switch (action.type) {
    case actionTypes.SET_EXPRESSION:
      if (['+', '/', '*', '%'].includes(action.payload) && !expression) {
        return `${total}${action.payload}`
      }
      return `${!expression && total ? total : ''}${expression + action.payload}`
    default:
      return expression
  }
};



const claculatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_EXPRESSION:
      let expression = setExpression(state, action)

      return {
        ...state,
        expression,
        total: calculate(expression) || state.total
      }
    case actionTypes.CLEAR_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: 0
      }
    case actionTypes.DELETE_LAST_EXPRESSION_ENTRY:
      let exp = state.expression
      exp = exp.split('').slice(0, exp.length - 1).join('')
      return {
        ...state,
        expression: exp,
        total: calculate(exp)
      }
    case actionTypes.EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: calculate(state.expression) || state.expression || state.total
      }
    case actionTypes.SQRT_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: Math.sqrt(state.expression)
      }
    case actionTypes.EXPONENTIATION_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: Math.pow(state.expression, state.expression)
      }
    default:
      return state
  }
};


export default claculatorReducer;