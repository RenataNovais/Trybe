// Crie uma função que faça requisição para a api dog pictures.
// Mocke a requisição e crie dois testes.
// O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".
// O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
// Crie todos os testes que achar necessário.

function dogPicFetch() {
  return fetch('https://dog.ceo/api/breeds/image/random').then(response => response
    .json()
    .then(json =>
      response.ok ? Promise.resolve(json) : Promise.reject(json)
    )  
  );
}

describe('testing fetch with mock', () => {
  dogPicFetch = jest.fn();
  afterEach(dogPicFetch.mockReset);
  
  test('test if fetch promise was resolved with sucess', async () => {
    dogPicFetch.mockResolvedValue('request sucess');

    dogPicFetch();
    expect(dogPicFetch).toHaveBeenCalled();
    expect(dogPicFetch).toHaveBeenCalledTimes(1);
    expect(dogPicFetch()).resolves.toBe('request sucess');
    expect(dogPicFetch).toHaveBeenCalledTimes(2);
  });

  test('test if fetch promise was rejected', async () => {
    dogPicFetch.mockRejectedValue('request failed');
    expect(dogPicFetch).toHaveBeenCalledTimes(0);
    try {
      await dogPicFetch();
    } catch (err) {
      return err;
    }
    expect(dogPicFetch).toHaveBeenCalled();
    expect(dogPicFetch).toHaveBeenCalledTimes(1);
    expect(dogPicFetch()).rejects.toBe('request failed');
    expect(dogPicFetch).toHaveBeenCalledTimes(2);
  });
})
