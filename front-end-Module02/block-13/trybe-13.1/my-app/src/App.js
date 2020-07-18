import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';
import Pictures from './Pictures';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Minha Lista de Componentes',
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  render() {
    return (
      <div className='main'>
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value='Título Show' />
        </MyList>
        <Pictures
          height="80"
          src="https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dbdd9165ad64f5e29811c52_BRAND3.png"
          alt="Logo da Trybe"
          legenda="Lista feita na Trybe"
        />
      </div>
    )
  }
}

export default App;
