const myRemove = require('../src/ex4');

describe('myRemove', () => {
  let arr = [1, 2, 3, 4];
  test('returns array without item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  test('not return this array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('arr is not changed', () => {
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  })
})