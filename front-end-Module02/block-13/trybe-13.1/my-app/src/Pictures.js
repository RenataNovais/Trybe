import React from 'react';

const Pictures = (props) => {
  const { height, src, alt, legenda } = props;

  return (
    <div>
      <img alt={alt} src={src} height={height} />
      <p>{legenda}</p>
    </div>
  );
}

export default Pictures;
