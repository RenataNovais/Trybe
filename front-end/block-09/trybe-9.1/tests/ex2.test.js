const myIndexOf = require('../src/ex2.js');

describe('myIndexOf', () => {
  test('return index of listed number', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
})
