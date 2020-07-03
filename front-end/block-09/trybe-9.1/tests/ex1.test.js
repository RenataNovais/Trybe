const sum = require('../src/ex1.js');

describe('sum', () => {
  test('it should add two numbers', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(2.5, 2.5)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });
  test('throw error', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  test('error message', () => {
    expect(() => {
      sum(4)
    }).toThrowError('parameters must be numbers')
    expect(() => {
      sum(4, 'a')
    }).toThrowError('parameters is a string');
  })
})