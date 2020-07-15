import React from 'react';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image } = this.props.pokemon;
    return (
      <div className='individuo'>
        <div>
        <h3>{name}</h3>
        <h3>{type}</h3>
        <h3>
          {value} {measurementUnit}
        </h3>
        </div>
        <img alt={'Imagem do Pokemon ' + name} src={image}/>
      </div>
    )
  }
}

export default Pokemon;