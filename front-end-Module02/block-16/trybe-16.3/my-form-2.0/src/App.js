import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import store from './redux/store';
import Form from './components/Form';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     cpf: '',
  //     address: '',
  //     city: '',
  //     countryState: '',
  //     resume: '',
  //     role: '',
  //     roleDescription: '',
  //   }

  //   // this.handleChange = this.handleChange.bind(this);
  //   this.eraseForm = this.eraseForm.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  
  // updateState(name, value) {
  //   this.setState({
  //     [name]: value,
  //   })
  // } // ESSA FUNÇÃO AGORA É A ACTION HANDLER

  // handleOnBlur = event => {
  //   let { name, value } = event.target;
  //   if(name === 'city') value = value.match(/^\d/) ? '' : value;

  //   this.updateState(name, value);
  // }

  // handleChange(event) {
  //   let { name, value } = event.target;
  //   if(name === 'name') value = value.toUpperCase();
  //   if(name === 'address') value = value.replace(/[^\w\s]/gi, '');

  //   this.updateState(name, value);
  // }  // ESSA FUNÇÃO AGORA É A ACTION HANDLER

  // userInfo(info) {
  //   const infoSection = document.querySelector('.info');
  //   const ul = document.createElement('ul');
  //   info.forEach((input, index) => {
  //     const li = document.createElement('li');
  //     li.className = 'info-box';
  //     li.innerHTML = `${input[0]} : ${input[1]}`;
  //     ul.appendChild(li);
  //   });
  //   infoSection.appendChild(ul);
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const info = Object.entries(this.state);
  //   this.userInfo(info);
  // } // ESSAS FUNÇÕES VIRARAM A AÇÃO SUBMIT E A SECTION AO FINAL DO FORMS

  eraseForm() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      resume: '',
      role: '',
      roleDescription: '',
    })
    const userInfo = document.querySelector('.info');
    if (userInfo) userInfo.remove();
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Header />
          <Form />
        </Provider>
      </div>
    );
  }
}

export default App;
