const myRemoveWithoutCopy = require('../src/ex5');

describe('myRemoveWithoutCopy', () => {
  let arr = [1, 2, 3, 4];
  test('returns array without item', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  test('array not equal to the inittial array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('param array is not the same', () => {
    myRemoveWithoutCopy(arr, 3);
    expect(arr).not.toEqual([1, 2, 3, 4]);
  });
})