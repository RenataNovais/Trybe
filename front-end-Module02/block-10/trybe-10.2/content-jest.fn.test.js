function randomNum() {
  return Math.floor(Math.random() * 100);
}; // Lógica de gerar o número
function isDivisible(number) {
  return (randomNum() % number) === 0;
};

test('randomNumber is called after isDivisible is called', () => {
  randomNum = jest.fn();

  isDivisible(2);
  expect(randomNum).toHaveBeenCalled();
});

test('randomNumber is even and isDivisible(2) returns true', () => {
  randomNum = jest
    .fn()
    .mockReturnValueOnce(12)
    .mockReturnValueOnce(80)
    .mockReturnValueOnce(60)
    .mockReturnValueOnce(24);

  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(1);
  
  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(2);
  
  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(3);
  
  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(4);
})

test('randomNumber is even and isDivisible(2) returns true', () => {
  randomNum = jest
    .fn()
    .mockReturnValueOnce(12)
    .mockReturnValueOnce(80)
    .mockReturnValue(60);

  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(1);
  
  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(2);
  
  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(3);
  
  expect(isDivisible(2)).toBeTruthy();
  expect(randomNum).toHaveBeenCalledTimes(4);
})
