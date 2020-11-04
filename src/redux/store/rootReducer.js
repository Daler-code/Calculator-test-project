import { combineReducers } from 'redux';

import calculatorReducer from '../modules/calculator/calculatorReducer';

const reducer = combineReducers({
  calculatorReducer
});

export default reducer;