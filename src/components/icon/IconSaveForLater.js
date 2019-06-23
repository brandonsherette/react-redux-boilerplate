import React from 'react';
import PropTypes from 'prop-types';

const IconSaveForLater = ({ className }) => (
  <i className={`iconSaveForLater fas fa-hdd ${className}`} />
);

IconSaveForLater.propTypes = {
  className: PropTypes.string,
};

IconSaveForLater.defaultProps = {
  className: '',
};

export default IconSaveForLater;