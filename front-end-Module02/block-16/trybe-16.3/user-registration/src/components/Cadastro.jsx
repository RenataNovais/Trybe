import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doRegisterCostumer } from '../redux/actionCreators';

export class Cadastro extends Component {
  render() {
    const user = { fullAddress: {} };
    const { login: { email }, costumerInfo } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>Olá {email} </p>
        <h3>Cadastre um novo cliente</h3>
        <Link to="/clientes">Clientes Cadastrados</Link>
        <form>
          <div className="form-field">
            <label htmlFor="client-name">Nome:</label>
            <input type="text" name="client-name" onChange={(e) => user.name = e.target.value }></input>
          </div>
          <div className="form-field">
            <label htmlFor="client-cel">Telefone:</label>
            <input type="number" name="client-cel" onChange={(e) => user.cel = e.target.value }></input>
          </div>
          <div className="form-field">
            <label htmlFor="client-email">Email:</label>
            <input type="email" name="client-email" onChange={(e) => user.email = e.target.value } />
          </div>
          <div className="form-field">
            <p>Enderço:</p>
            <label htmlFor="client-address">Rua</label>
            <input type="text" name="client-address" onChange={(e) => user.fullAddress.address = e.target.value } />
            <label htmlFor="client-city">Cidade</label>
            <input type="text" name="client-city" onChange={(e) => user.fullAddress.city = e.target.value } />
            <label htmlFor="client-countryState">Estado</label>
            <input type="text" name="client-countryState" onChange={(e) => user.fullAddress.countryState = e.target.value } />
          </div>
          <div className="form-field">
            <label htmlFor="client-seller">Nome Vendedor:</label>
            <input type="text" name="client-seller" onChange={(e) => user.seller = e.target.value } />
          </div>
          <button type="button" onClick={() => console.log(user)}>Paulo Quer testar</button>
          <button type="button" onClick={() => costumerInfo(user)}>Cadastrar</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: {
    email: state.reducer.login.email,
    senha: state.reducer.login.senha,
  }
});

const mapDispatchToProps = (dispatch) => ({ 
  costumerInfo: (info) => dispatch(doRegisterCostumer(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);