import React from 'react';
import PropTypes from 'prop-types';

const IconReceive = ({ className }) => (
  <i className={`iconReceive fas fa-thumbs-up ${className}`} />
);

IconReceive.propTypes = {
  className: PropTypes.string,
};

IconReceive.defaultProps = {
  className: '',
};

export default IconReceive;