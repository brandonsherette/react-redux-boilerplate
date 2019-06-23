import React from 'react';
import PropTypes from 'prop-types';

const IconWarning = ({ className }) => (
  <i className={`iconWarning text-warning fa fa-exclamation-triangle ${className}`} />
);

IconWarning.propTypes = {
  className: PropTypes.string,
};

IconWarning.defaultProps = {
  className: '',
};

export default IconWarning;