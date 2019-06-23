import React from 'react';
import PropTypes from 'prop-types';

const IconArchive = ({ className }) => (
  <i className={`iconArchive fas fa-archive ${className}`} />
);

IconArchive.propTypes = {
  className: PropTypes.string,
};

IconArchive.defaultProps = {
  className: '',
};

export default IconArchive;