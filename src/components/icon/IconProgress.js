import React from 'react';
import PropTypes from 'prop-types';

const IconProgress = ({ className }) => (
  <i className={`iconProgress fas fa-spinner ${className}`} />
);

IconProgress.propTypes = {
  className: PropTypes.string,
};

IconProgress.defaultProps = {
  className: '',
};

export default IconProgress;