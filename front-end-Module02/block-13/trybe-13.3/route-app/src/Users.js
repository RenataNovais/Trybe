// arquivo Users.js
import React from 'react';

class Users extends React.Component {
  render() {
    const { greetingMessage } = this.props;
    return (
      <div>
        <h2> Users </h2>
        <p> {greetingMessage}, this is my awesome Users component </p>
        <p>{this.props.match.params.id}</p>
      </div>
    )
  }
}

export default Users;
