import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Cliente from './Cliente'

export class ClientesCadastrados extends Component {

  render() {
    const { costumers } = this.props;
    console.log(this.props);
    if (!costumers) return (
      <div>
        <h3>Nenhum cliente cadastrado</h3>
        <Link to="/cadastro"> 
          <button>Cadastro</button>
        </Link>
      </div>
    )
    return (
      <div>

        <div>
          <h3>Clientes</h3>
          <ul>
            {costumers.map((costumer) => <Cliente costumer={costumer} /> )}
          </ul>
        </div>

        {/* deve permanecer na tela mesmo caso hajam clientes */}
        <Link to="/cadastro"> 
          <button>Cadastro</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  costumers: state.reducer.costumers
})

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(ClientesCadastrados);
