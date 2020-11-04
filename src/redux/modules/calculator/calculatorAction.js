import actionTypes from '../../../consonants/actionTypes';


export const calculate = (expression) => {
  return {
    type: actionTypes.SET_EXPRESSION,
    payload: expression
  }
};

export const clear = () => {
  return {
    type: actionTypes.CLEAR_EXPRESSION
  }
};

export const evaluate = () => {
  return {
    type: actionTypes.EVALUATE_EXPRESSION
  }
};

export const deleteLastEntry = () => {
  return {
    type: actionTypes.DELETE_LAST_EXPRESSION_ENTRY
  }
};

export const sqrtExpression = () => {
  return {
    type: actionTypes.SQRT_EXPRESSION
  }
};

export const exponentiation = () => {
  return {
    type: actionTypes.EXPONENTIATION_EXPRESSION
  }
};

