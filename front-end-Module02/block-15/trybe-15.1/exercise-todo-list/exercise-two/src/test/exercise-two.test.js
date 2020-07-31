import React from 'react';
import { render, fireEvent, cleanup, getAllByTestId } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const {
      getByLabelText,
      getByRole,
      getAllByTestId
    } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const inputList = getByLabelText('Tarefa:'); // peguei o elemento input que tem a label associada.
    const btnAdd = getByRole('button'); // peguei o botão que adiciona a tarefa.
    
    fireEvent.change(inputList, { target: {value: listTodo[0] }});  // simulação da digitação;
    fireEvent.click(btnAdd); // simulação do clique de adicionar tarefa;
    fireEvent.change(inputList, { target: {value: listTodo[1] }});
    fireEvent.click(btnAdd);
    fireEvent.change(inputList, { target: {value: listTodo[2] }});
    fireEvent.click(btnAdd);
    fireEvent.click(btnAdd);

    const li = getAllByTestId('li'); // peguei o elemento li que é criado após o click.
    expect(li.length).toBe(4); // verifiquei que este elemento existe no DOM.
    expect(li.textContent).toBe(listTodo); // verifiquei se o valor do li é o criado na simulação.
  
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {

  })
})
