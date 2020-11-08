import actionTypes from '../../../consonants/actionTypes';

import calculate from '../../../utils/calculate';

let initialState = {
  expression: '',
  total: 0
};


function setExpression({ expression, total}, action) {

  // Disable inputting the operators multiple times in once
  if (/[\d]*[-+%*/√.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
    expression = expression.slice(0, expression.length - 1)
  }

  switch (action.type) {
    case actionTypes.SET_EXPRESSION:
      if (['+', '/', '*', '%', '√', 'x^y'].includes(action.payload) && !expression) {
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
        expression: action.payload.expression,
        total: Math.sqrt(state.expression) || state.total
      }
      case actionTypes.EXPONENTIATION_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: state.expression ** state.expression || state.total
      }
    default:
      return state
  }
};


export default claculatorReducer;