import React from 'react';

class Button extends React.Component {
  render() {
    const { type, filter } = this.props;
    return(
      <button onClick={() => filter(type)}>{type}</button>
    )
  }
}

export default Button;