import React from 'react';
import PropTypes from 'prop-types';

const IconEdit = ({ className }) => (
  <i className={`iconEdit far fa-edit ${className}`} />
);

IconEdit.propTypes = {
  className: PropTypes.string,
};

IconEdit.defaultProps = {
  className: '',
};

export default IconEdit;