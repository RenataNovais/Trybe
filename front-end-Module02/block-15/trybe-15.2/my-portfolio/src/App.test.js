import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../src/App';


jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom'); 
  return {
    ...originalModule,
    BrowserRouter: ({ children }) => {
      return (
        <div>{children}</div>
      );
    }
  };
})

test('Verificando se existe a palavra Home no componente App', () => {
  const history = createMemoryHistory();
  const { getAllByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  const linkElement = getAllByText(/home/i);
  // expect(linkElement).toBeInTheDocument();
  // expect(linkElement[0]).toBeInTheDocument();
  // expect(linkElement[1]).toBeInTheDocument();
  expect(linkElement.length).toBe(2);
})

test('Verificando se os links levam para a rota desejada e se o histórico possui a URL correta', () => {
  const history = createMemoryHistory();
  // console.log(render(<Router history={history}>
  //   <App />
  // </Router>))
  const { getByTestId, getByText, queryByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  // console.log(history);
  const linkHome = getByTestId('link-home');
  fireEvent.click(linkHome);
  expect(getByTestId('home-component')).toBeInTheDocument();
  expect(history.location.pathname).toBe('/');

  const linkAbout = getByTestId('link-about');
  fireEvent.click(linkAbout);
  console.log(['este é o histórico depois do link about'], history);
  expect(getByTestId('about-component')).toBeInTheDocument();
  expect(history.location.pathname).toBe('/about');
  expect(queryByText(/HOME/)).not.toBeInTheDocument();

  const linkProjects = getByTestId('link-projects');
  fireEvent.click(linkProjects);
  console.log(['este é o histórico depois do link projects'],history);
  expect(getByTestId('projects-component')).toBeInTheDocument();
  expect(history.location.pathname).toBe('/projects');
  expect(queryByText(/sobre mim/i)).not.toBeInTheDocument();

  const linkContact = getByTestId('link-contact');
  fireEvent.click(linkContact);
  console.log(['este é o histórico depois do link contact'], history);
  expect(getByTestId('contact-component')).toBeInTheDocument();
  expect(history.location.pathname).toBe('/contact');
  expect(queryByText(/meus projetos/i)).not.toBeInTheDocument();

})
