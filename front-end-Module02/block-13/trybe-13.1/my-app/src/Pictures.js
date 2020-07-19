import React from 'react';
import PropTypes from 'prop-types';

const Pictures = (props) => {
  const { height, src, alt, legenda } = props;

  return (
    <div>
      <img alt={alt} src={src} height={height} />
      <p>{legenda}</p>
    </div>
  );
}

Pictures.prototype = {
  alt: PropTypes.string,
  height: PropTypes.number,
}


export default Pictures;
