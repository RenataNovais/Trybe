import React from 'react';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    if (username === "joao" && password === 1234) return <p>Welcome {username}!</p>
    return alert('Access Denied')
  }
}

export default StrictAccess;
