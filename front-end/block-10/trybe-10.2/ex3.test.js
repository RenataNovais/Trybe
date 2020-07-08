// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.
// Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.
// Faça os testes necessários.

function randomNum() {
  return Math.floor(Math.random() * 101);
}
describe('changing function implementation', () => {

  test('to receive 3 params and multiply', () => {
    randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
    expect(randomNum(1, 2, 3)).toBe(6);
    expect(randomNum).toHaveBeenCalled();
    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum).toHaveBeenCalledWith(1, 2, 3);
  });

  test('to receive one param and return its double', () => {
    randomNum.mockReset().mockImplementation(a => 2 * a);
    
    expect(randomNum).toHaveBeenCalledTimes(0);
    expect(randomNum(2)).toBe(4);
    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum).toHaveBeenCalledWith(2);
  });
});
