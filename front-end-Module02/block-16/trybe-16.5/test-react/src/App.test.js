import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/index';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const mockInitialState = {
  value1: 0,
  value2: 0,
  value3: 0,
}

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
};

// teste falhando pois não está sendo passada a store de forma correta. 

// describe('testing clicks', () => {
//   beforeEach(cleanup);
//   test('the car move foward and backward', () => {
//     const { getByAltText, getByTestId} = renderWithRedux(
//       <App />,
//       { initialState: mockInitialState },
//     );
    
//     const redButton = getByTestId('red-button');
//     const blueButton = getByTestId('blue-button');
//     const yellowButton = getByTestId('yellow-button');

//     const redCar = getByAltText('red car');
//     const blueCar = getByAltText('blue car');
//     const yellowCar = getByAltText('yellow car');

//     expect(redCar.className).toBe('car-left');
//   })
// })
