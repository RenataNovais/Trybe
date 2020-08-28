import React from 'react';
import { render, fireEvent, cleanup, getByRole, getByText, getByDisplayValue } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText, getByRole} = render(<App />);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('Adicionar')).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const TO_DO_ITEM = 'estudar'; // simulei um texto que o usuário vai digitar.
    const {
      getByLabelText,
      getByRole,
      getByTestId
    } = render(<App />);

    const inputList = getByLabelText('Tarefa:'); // peguei o elemento input que tem a label associada.
    const btnAdd = getByRole('button'); // peguei o botão que adiciona a tarefa.
    
    fireEvent.change(inputList, { target: {value: TO_DO_ITEM }}); // simulação da digitação;
    fireEvent.click(btnAdd); // simulação do clique de adicionar tarefa;

    const li = getByTestId('li'); // peguei o elemento li que é criado após o click.
    expect(li).toBeInTheDocument(); // verifiquei que este elemento existe no DOM.
    expect(li.textContent).toBe(TO_DO_ITEM); // verifiquei se o valor do li é o criado na simulação.
  });
});
