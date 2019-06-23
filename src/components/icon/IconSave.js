import React from 'react';
import PropTypes from 'prop-types';

const IconSave = ({ className }) => (
  <i className={`iconSave fas fa-save ${className}`} />
);

IconSave.propTypes = {
  className: PropTypes.string,
};

IconSave.defaultProps = {
  className: '',
};

export default IconSave;