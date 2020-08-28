import React from 'react';

function Cliente(props) {
  const { costumer } = props;
  return (
    <div>
      <li>
        <h3>{costumer.name}</h3>
        <p>{costumer.email}</p>
        <p>{costumer.cel}</p>
        <p>{costumer.fullAddress.address}</p>
        <p>{costumer.fullAddress.city}</p>
        <p>{costumer.fullAddress.countryState}</p>
      </li>
    </div>
  )
}
 
export default Cliente;