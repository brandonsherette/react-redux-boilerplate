import React from 'react';
import PropTypes from 'prop-types';

const IconLock = ({ className }) => (
  <i className={`iconLock fas fa-lock ${className}`} />
);

IconLock.propTypes = {
  className: PropTypes.string,
};

IconLock.defaultProps = {
  className: '',
};

export default IconLock;