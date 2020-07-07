// Dentro de um mesmo arquivo, crie três funções.
// A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra.
// A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo.
// Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
// A terceira deve receber três strings e concatená-las.

function strToUpper(str) {
  return str.toUpperCase();
}

function strFirstLetter(str) {
  return str.charAt(0);
}

function twoStrToOne(first, second) {
  return first + ' ' + second;
}

describe('mocking functions', () => {
  test('srtToUpper now is toLower', () => {
    strToUpper = jest.fn().mockImplementation((str) => str.toLowerCase());

    expect(strToUpper('RE')).toBe('re');
    expect(strToUpper).toHaveBeenCalled();
    expect(strToUpper).toHaveBeenCalledTimes(1);
    expect(strToUpper).toHaveBeenCalledWith('RE');
  });

  test('srtFirstLetter now is LastLetter', () => {
    strFirstLetter = jest
      .fn()
      .mockImplementation((str) => str.charAt(str.length - 1));
    
    expect(strFirstLetter('abacaxi')).toBe('i');
    expect(strFirstLetter).toHaveBeenCalled();
    expect(strFirstLetter).toHaveBeenCalledTimes(1);
    expect(strFirstLetter).toHaveBeenCalledWith('abacaxi');
  });

  test('twoStrToOne now is threeToOne', () => {
    twoStrToOne = jest
      .fn()
      .mockImplementation((first, second, third) => first + ' ' + second + ' ' + third);
    
    expect(twoStrToOne('eu', 'sou', 'dev')).toBe('eu sou dev');
    expect(twoStrToOne).toHaveBeenCalled();
    expect(twoStrToOne).toHaveBeenCalledTimes(1);
    expect(twoStrToOne).toHaveBeenCalledWith('eu', 'sou', 'dev');
  });
});
