// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

function randomNum() {
  return Math.floor(Math.random() * 101);
}

test('changing function with mock', () => {
  randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(randomNum(12, 6)).toBe(2);
  expect(randomNum).toHaveBeenCalled();
  expect(randomNum).toHaveBeenCalledTimes(1);
  expect(randomNum).toHaveBeenCalledWith(12, 6);
})