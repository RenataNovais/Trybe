function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (a === undefined || b === undefined)
  throw new Error('parameters must be numbers');

  if (typeof a === 'string' || typeof b === 'string') {
    throw new Error('parameters is a string');
  }
}

module.exports = sum;