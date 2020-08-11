import { createStore } from 'redux';
import { combineReducers } from 'redux';
import reducerSignal from './reducerSignal';
import reducerCars from './reducerCars';


const rootReducer = combineReducers({ reducerSignal, reducerCars });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
