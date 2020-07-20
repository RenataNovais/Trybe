import React from 'react';
import './App.css';
import CounterDisplay from './CounterDisplay';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
