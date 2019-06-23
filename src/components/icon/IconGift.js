import React from 'react';
import PropTypes from 'prop-types';

const IconGift = ({ className }) => (
  <i className={`iconGift fas fa-gift ${className}`} />
);

IconGift.propTypes = {
  className: PropTypes.string,
};

IconGift.defaultProps = {
  className: '',
};

export default IconGift;