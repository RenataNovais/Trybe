import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../redux/actionCreators';

export class Login extends Component {
  render() {
    const { mandaPraAction } = this.props;
    console.log(this.props);
    return (
      <div>
        <label htmlFor="email-login">Email</label>
        <input type="email" id="email-login" placeholder="Email" name="email" />
        <label htmlFor="password-login">Senha</label>
        <input type="password" id="password-login" name="senha" />
        <button type="submit" onClick={ () => {
          mandaPraAction(document.getElementById('email-login').value, document.getElementById('password-login').value);
          this.props.history.push('/clientes');
        }}>Login</button>
      </div>
    )
  }
}
// const mapStateToProps = (state) => ({
//   login: {
//     email: state.reducer.login.email,
//     senha: state.reducer.login.senha,
//   }
// });

const mapDispatchToProps = (dispatch) => ({
  mandaPraAction: (email, senha) => dispatch(doLogin({ email, senha }))
});

export default connect(null, mapDispatchToProps)(Login);
