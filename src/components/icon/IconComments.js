import React from 'react';
import PropTypes from 'prop-types';

const IconComments = ({ className }) => (
  <i className={`iconComments fas fa-comments ${className}`} />
);

IconComments.propTypes = {
  className: PropTypes.string,
};

IconComments.defaultProps = {
  className: '',
};

export default IconComments;