import React from 'react';
import PropTypes from 'prop-types';

const IconShipped = ({ className }) => (
  <i className={`iconShipped fas fa-truck ${className}`} />
);

IconShipped.propTypes = {
  className: PropTypes.string,
};

IconShipped.defaultProps = {
  className: '',
};

export default IconShipped;