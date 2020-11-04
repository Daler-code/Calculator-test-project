import calculate from '../utils/calculate';

describe('Calcualte', () => {
  let expression;
  it ('evaluates the expression correctly', () => {
    expression = '2+3+4-4*3'
    expect(calculate(expression)).toBe(-3);

    expression = '5+8-4'
    expect(calculate(expression)).toBe(9);

    expression = '0-10'
    expect(calculate(expression)).toBe(-10);

    expression = '0.7+2.1'
    expect(calculate(expression)).toBe(2.8);
  })

  it ('evaluates the expression startnig with a "-" operator', () => {
    expression = '-17'
    expect(calculate(expression)).toBe(-17);
  })

  it ('should throw an error for expressions starting with any other operator apart from "-" ', () => {
    expression = '*10'
    expect(calculate(expression)).toThrow();

    expression = '+10-8'
    expect(calculate(expression)).toThrow();

    expression = '/6+5'
    expect(calculate(expression)).toThrow();
  })

  it('evaluates longer expressions starting with "-" operator', () => {
    expression = '-20-6'
    expect(calculate(expression)).toBe(-26);
  })

  it ('ignores trailing operators while evaluating the expression correctly', () => {
    expression = '2+3+4-4*3-'
    expect(calculate(expression)).toBe(-3);
  })

  it ('ignores every expression after multiple operators while evaluating the expression correctly', () => {
    expression = '2+3++4-/4*3+78-'
    expect(calculate(expression)).toBe(5);
  })

});