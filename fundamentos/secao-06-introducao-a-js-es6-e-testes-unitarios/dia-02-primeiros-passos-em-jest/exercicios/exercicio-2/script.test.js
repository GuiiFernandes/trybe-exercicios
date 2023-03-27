const myFizzBuzz = require('./script');

describe('Verifica o funcionamento de myFizzBuzz', () => {
  it('A função retorna "fizzbuzz" quando o número é 15', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  it('A função retorna "fizz" quando o número é 9', () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });
  it('A função retorna "buzz" quando o número é 10', () => {
    expect('buzz').toBe(myFizzBuzz(10));
  });
  it('A função retorna false quando o número é "15"', () => {
    expect(false).toBe(myFizzBuzz('15'));
  });
});
