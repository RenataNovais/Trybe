import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent } = props;
  const { title, content, timeSeconds } = props.children;
  // const { hideComponent, contentTitle, content } = props;
  // setTimeout(() => hideComponent(), 3000);
  setTimeout(() => hideComponent(), timeSeconds * 1000);

  return (
    <div className='Alert'>
      {/* <h1>{contentTitle}</h1>
      <p>{content}</p> */}
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

// ex 1
// Alert.propTypes = {
//   hideComponent: PropTypes.func.isRequired,
//   content: PropTypes.string.isRequired,
//   contentTitle: PropTypes.string.isRequired,
// };

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeSeconds: PropTypes.number.isRequired,
  })
}

Alert.defaultProps = {
  children: {
    title: "Algum título",
    content: "Algum conteúdo",
    timeSeconds: 3
  },
}

export default Alert;
