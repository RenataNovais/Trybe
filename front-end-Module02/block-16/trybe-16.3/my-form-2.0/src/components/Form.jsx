import React from 'react';
import { connect } from 'react-redux';
import { submit, handler } from '../redux/actions';
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
    } = this.props;
    return (
      <form onSubmit={submit}>
        <fieldset>
          <div className="container">
            Name:
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
            Email:
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
            CPF:
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
            Endereço:
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
            Cidade:
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
            Estados:
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
            Resumo do Currículo:
            <textarea
              name='resume'
              maxLength={1000}
              required
              value={resume}
              onChange={handler}
            />
          </div>
          <div className="container">
            Cargo:
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
            Descrição do Cargo:
            <textarea
              name='roleDescription'
              maxLength={500}
              required
              value={roleDescription}
              onChange={handler}
            />
          </div>
        </fieldset>
        <button onClick={this.eraseForm}>Clear Form</button>
        <button type="submit">Submit now!</button>
        <section className="info">
          <ul>
            {Object.entries(all).map((entry, index) => (
              <li key={index} className='info-box'>
                {entry[0]}: {entry[1]}
              </li>
            ))}
          </ul>
        </section>
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

export default connect(mapStateToProps, { handler, submit })(Form);
