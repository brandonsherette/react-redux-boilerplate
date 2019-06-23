import React from 'react';
import PropTypes from 'prop-types';

const IconNA = ({ className }) => (
  <i className={`iconNA fas fa-ellipsis-h ${className}`} />
);

IconNA.propTypes = {
  className: PropTypes.string,
};

IconNA.defaultProps = {
  className: '',
};

export default IconNA;