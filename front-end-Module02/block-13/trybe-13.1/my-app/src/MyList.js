import React from 'react';

const MyList = (props) => {
  return (
    <div className='list'>
      <ul>
        {props.children.map((child) => {
          if (child.type && child.type === 'li' ) return child;
          return <li>{child}</li>;
        })}
      </ul>
      {console.log(props.children)}
    </div>
  )
}

export default MyList;
