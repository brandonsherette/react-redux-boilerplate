import React from 'react';
import PropTypes from 'prop-types';

const IconSuccess = ({ className }) => (
  <i className={`iconSuccess text-success fa fa-check-circle ${className}`} />
);

IconSuccess.propTypes = {
  className: PropTypes.string,
};

IconSuccess.defaultProps = {
  className: '',
};

export default IconSuccess;