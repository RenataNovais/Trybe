import React from 'react';
import { connect } from 'react-redux';
import { submit, handler, clear, clearAll } from '../redux/actions';
import States from '../services/States';

class Form extends React.Component {
  render () {
    const {
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      resume,
      role,
      roleDescription,
      all,
      submit,
      handler,
      clear,
      clearAll,
    } = this.props;
    return (
      <form onSubmit={submit}>
        <div className="form-and-info">
          <section className="form-sec">  
            <fieldset>
              <div className="container">
                <label htmlFor="name">Name</label>
                <input 
                  type='text'
                  name='name'
                  value={name}
                  maxLength={40}
                  onChange={handler}
                  size={50}
                  required
                />
              </div>
              <div className="container">
              <label htmlFor="email">Email</label>
                <input 
                  type='text'
                  name='email'
                  value={email}
                  maxLength={50}
                  onChange={handler}
                  size={50}
                  required
                />
              </div>
              <div className="container">
                <label htmlFor="cpf">CPF</label>
                <input 
                  type='text'
                  name='cpf'
                  value={cpf}
                  maxLength={11}
                  onChange={handler}
                  size={50}
                  required
                />
              </div>
              <div className="container">
                <label htmlFor="address">Endereço</label>
                <input 
                  type='text'
                  name='address'
                  value={address}
                  maxLength={11}
                  onChange={handler}
                  size={50}
                  required
                />
              </div>
              <div className="container">
                <label htmlFor="city">Cidade</label>
                <input 
                  type='text'
                  name='city'
                  maxLength={28}
                  size={50}
                  required
                  value={city}
                  onBlur={this.handleOnBlur}
                  onChange={handler}
                />
              </div>
              <div className="container">
                <label htmlFor="countryState">Estados</label>
                <select 
                  name='countryState'
                  value={countryState}
                  onChange={handler}
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
                <label htmlFor="resume">Resumo</label>
                <textarea
                  name='resume'
                  maxLength={1000}
                  required
                  value={resume}
                  onChange={handler}
                />
              </div>
              <div className="container">
                <label htmlFor="role">Cargo</label>
                <input
                  type='text'
                  name='role'
                  maxLength={40}
                  required
                  value={role}
                  // onMouseEnter={() => alert('Preencha com cuidado esta informação.')}
                  onChange={handler}
                />
              </div>
              <div className="container">
                <label htmlFor="roleDescription">Descrição do Cargo</label>
                <textarea
                  name='roleDescription'
                  maxLength={500}
                  required
                  value={roleDescription}
                  onChange={handler}
                />
              </div>
            </fieldset>
          </section>
          {all.length > 0 && 
            <section className="info">
              {all.map((entry) => (
                <div className="info-box">
                  <h3>{entry.name}</h3>
                  <h6>{entry.email}</h6>
                  <h6>CPF: {entry.cpf}</h6>
                  <h6>Endereço: {entry.address} / Cidade: {entry.city} / {entry.countryState}</h6>
                  <h5>Resumo do Currículo:</h5>
                  <p> {entry.resume} </p>
                  <h6>Cargo: {entry.role} </h6>
                  <p> {entry.roleDescription} </p>
                </div>
              ))}
            <button type="button" onClick={clearAll}>Clear all CV info</button>
            </section>
          }
        </div>
        <div class="button-div">
          <button onClick={clear}>Clear Form</button>
          <button type="submit">Submit now!</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.reducer.name,
  email: state.reducer.email,
  cpf: state.reducer.cpf,
  address: state.reducer.address,
  city: state.reducer.city,
  countryState: state.reducer.countryState,
  resume: state.reducer.resume,
  role: state.reducer.role,
  roleDescription: state.reducer.roleDescription,
  all: state.reducer.all,
});

export default connect(mapStateToProps, { handler, submit, clear, clearAll })(Form);
