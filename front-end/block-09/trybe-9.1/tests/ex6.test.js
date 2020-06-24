const myFizzBuzz = require('../src/ex6');

describe('myFizzBuzz', () => {
  test('multiple of 3 and 5 returns fizzBuzz', () => {
    expect(myFizzBuzz(15)).toMatch(/fizzbuzz/);
  });
  test('multiple of 3 returns fizz', () => {
    expect(myFizzBuzz(9)).toMatch(/fizz/);
  });
  test('multiple of 5 return buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
  test('not multiple of 3 or 5 returns num', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('param not num returns false', () => {
    expect(myFizzBuzz('teste')).toBeFalsy();
  });
})