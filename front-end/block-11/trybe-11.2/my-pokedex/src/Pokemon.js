import React from 'react';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokebola;
    return (
      <div className='individuo'>
        <div>
        <h3>{name}</h3>
        <h3>{type}</h3>
        <h3>
          {averageWeight.value} {averageWeight.measurementUnit}
        </h3>
        </div>
        <img alt={'Imagem do Pokemon ' + name} src={image}></img>
      </div>
    )
  }
}

export default Pokemon;