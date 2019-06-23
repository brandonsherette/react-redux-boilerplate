import React from 'react';
import PropTypes from 'prop-types';

const IconError = ({ className }) => (
  <i className={`iconError text-danger fa fa-times-circle ${className}`} />
);

IconError.propTypes = {
  className: PropTypes.string,
};

IconError.defaultProps = {
  className: '',
};

export default IconError;