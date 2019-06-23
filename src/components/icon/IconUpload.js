import React from 'react';
import PropTypes from 'prop-types';

const IconUpload = ({ className }) => (
  <i className={`iconUpload fa fa-cloud-upload-alt ${className}`} />
);

IconUpload.propTypes = {
  className: PropTypes.string,
};

IconUpload.defaultProps = {
  className: '',
};

export default IconUpload;