import actionTypes from '../consonants/actionTypes';
import calculatorReducer from '../redux/modules/calculator/calculatorReducer';


describe('Calculator Reducer', () => {

  it ('should return the initial state', () => {
    const initialState = {
      expression: '',
      total: 0
    }
    expect(calculatorReducer(undefined, {})).toEqual(initialState)
  })

  it ('should handle SET_EXPRESSION', () => {
    let expected = {
      expression: '5*5',
      total: 25
    }
    let action = {
      type: actionTypes.SET_EXPRESSION,
      payload: '5*5'
    }
    expect(calculatorReducer(undefined, action)).toEqual(expected)
    
    expected = {
      expression: '0*',
      total: 0
    }
    action = {
      type: actionTypes.SET_EXPRESSION,
      payload: '*'
    }
    expect(calculatorReducer(undefined, action)).toEqual(expected)

    expected = {
      expression: '0/',
      total: 0
    }
    action = {
      type: actionTypes.SET_EXPRESSION,
      payload: '/'
    }
    expect(calculatorReducer(undefined, action)).toEqual(expected)

    expected = {
      expression: '0+',
      total: 0
    }
    action = {
      type: actionTypes.SET_EXPRESSION,
      payload: '+'
    }
    expect(calculatorReducer(undefined, action)).toEqual(expected)
  })

  it ('should handle CLEAR_EXPRESSION', () => {
    const expected = {
      expression: '',
      total: 0
    }
    const initialState = {
      expression: '4*5',
      total: 25
    }
    const action = {
      type: actionTypes.CLEAR_EXPRESSION
    }
    expect(calculatorReducer(initialState, action)).toEqual(expected)
  })

  it ('should handle DELETE_LAST_EXPRESSION_ENTRY', () => {
    const expected = {
      expression: '4*5*',
      total: 20
    }
    const initialState = {
      expression: '4*5*6',
      total: 120
    }
    const action = {
      type: actionTypes.DELETE_LAST_EXPRESSION_ENTRY
    }
    expect(calculatorReducer(initialState, action)).toEqual(expected)
  })

  it ('should handle EVALUATE_EXPRESSION', () => {
    const expected = {
      expression: '',
      total: 120
    }
    const initialState = {
      expression: '4*5*6',
      total: 120
    }
    const action = {
      type: actionTypes.EVALUATE_EXPRESSION
    }
    expect(calculatorReducer(initialState, action)).toEqual(expected)
  })

})