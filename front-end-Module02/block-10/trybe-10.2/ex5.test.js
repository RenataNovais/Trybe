const lastFunctions = require('./ex4.test.js');
// const { strToUpper } = require('./ex4.test.js');

describe('trying mock restore', () => {
  test('strToUpperCase restoring', () => {
    const strToUpper = jest
      .spyOn(lastFunctions, 'strToUpper')
      .mockImplementation(str => str.toLowerCase());

    expect(strToUpper('RE')).toBe('re');
    expect(strToUpper).toHaveBeenCalled();
    expect(strToUpper).toHaveBeenCalledTimes(1);
    expect(strToUpper).toHaveBeenCalledWith('RE');

    lastFunctions.strToUpper.mockRestore(); // need to be used with spyOn.

    expect(lastFunctions.strToUpper('re')).toBe('RE');
  });
})