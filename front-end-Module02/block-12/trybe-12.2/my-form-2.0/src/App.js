import React from 'react';
import './App.css';
import States from './States';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      resume: '',
      role: '',
      roleDescription: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.eraseForm = this.eraseForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateState(name, value) {
    this.setState({
      [name]: value,
    })
  }

  handleOnBlur = event => {
    let { name, value } = event.target;
    if(name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  handleChange(event) {
    let { name, value } = event.target;
    if(name === 'name') value = value.toUpperCase();
    if(name === 'address') value = value.replace(/[^\w\s]/gi, '');

    this.updateState(name, value);
  }

  userInfo(info) {
    const infoSection = document.querySelector('.info');
    const ul = document.createElement('ul');
    info.forEach((input, index) => {
      const li = document.createElement('li');
      li.className = 'info-box';
      li.innerHTML = `${input[0]} : ${input[1]}`;
      ul.appendChild(li);
    });
    infoSection.appendChild(ul);
  }

  handleSubmit(event) {
    event.preventDefault();
    const info = Object.entries(this.state);
    this.userInfo(info);
  }

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
        <header className="App-header">
          React Form!
        </header>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="container">
              Name:
              <input 
                type='text'
                name='name'
                value={this.state.name}
                maxLength={40}
                onChange={this.handleChange}
                size={50}
                required
              />
            </div>
            <div className="container">
              Email:
              <input 
                type='text'
                name='email'
                value={this.state.email}
                maxLength={50}
                onChange={this.handleChange}
                size={50}
                required
              />
            </div>
            <div className="container">
              CPF:
              <input 
                type='text'
                name='cpf'
                value={this.state.cpf}
                maxLength={11}
                onChange={this.handleChange}
                size={50}
                required
              />
            </div>
            <div className="container">
              Endereço:
              <input 
                type='text'
                name='address'
                value={this.state.address}
                maxLength={11}
                onChange={this.handleChange}
                size={50}
                required
              />
            </div>
            <div className="container">
              Cidade:
              <input 
                type='text'
                name='city'
                maxLength={28}
                size={50}
                required
                value={this.state.city}
                onBlur={this.handleOnBlur}
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              Estados:
              <select 
                name='countryState'
                value={this.state.countryState}
                onChange={this.handleChange}
                required
              >
                {States.map((value) => 
                  <option key={value[1]}>{value[0]}</option>
                )}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="container">
              Resumo do Currículo:
              <textarea
                name='resume'
                maxLength={1000}
                required
                value={this.state.resume}
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              Cargo:
              <input
                type='text'
                name='role'
                maxLength={40}
                required
                value={this.state.role}
                onMouseEnter={() => alert('Preencha com cuidado esta informação.')}
                onChange={this.handleChange}
              />
            </div>
            <div className="container">
              Descrição do Cargo:
              <textarea
                name='roleDescription'
                maxLength={500}
                required
                value={this.state.roleDescription}
                onChange={this.handleChange}
              />
            </div>
          </fieldset>
          <button onClick={this.eraseForm}>Clear Form</button>
          <button type="submit">Submit now!</button>
        </form>
        <section className="info">
            {this.state.submit}
        </section>
      </div>
    );
  }
}

export default App;
