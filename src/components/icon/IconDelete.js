import React from 'react';
import PropTypes from 'prop-types';

const IconDelete = ({ className }) => (
  <i className={`iconDelete fa fa-trash ${className}`} />
);

IconDelete.propTypes = {
  className: PropTypes.string,
};

IconDelete.defaultProps = {
  className: '',
};

export default IconDelete;