import React from 'react';
import PropTypes from 'prop-types';

const IconEmpty = ({ className }) => (
  <i className={`iconEmpty fas fa-ellipsis-h ${className}`} />
);

IconEmpty.propTypes = {
  className: PropTypes.string,
};

IconEmpty.defaultProps = {
  className: '',
};

export default IconEmpty;