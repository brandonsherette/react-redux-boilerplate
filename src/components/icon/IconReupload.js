import React from 'react';
import PropTypes from 'prop-types';

const IconReupload = ({ className }) => (
  <i className={`iconReupload fas fa-clould-upload-alt ${className}`} />
);

IconReupload.propTypes = {
  className: PropTypes.string,
};

IconReupload.defaultProps = {
  className: '',
};

export default IconReupload;