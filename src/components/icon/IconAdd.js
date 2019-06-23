import React from 'react';
import PropTypes from 'prop-types';

const IconAdd = ({ className }) => (
  <i className={`iconAdd fa fa-plus-circle ${className}`} />
);

IconAdd.propTypes = {
  className: PropTypes.string,
};

IconAdd.defaultProps = {
  className: '',
};

export default IconAdd;