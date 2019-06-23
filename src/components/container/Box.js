import React from 'react';
import PropTypes from 'prop-types';

export const ContainerBox = ({ children, className, color, ...rest }) => (
  <div className={`components-containerBox containerBox containerBox--${color} ${className}`} {...rest}>
    {children}
  </div>
);

ContainerBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'dark', 'light', 'info']),
};

ContainerBox.defaultProps = {
  className: '',
  color: 'default',
};

export default ContainerBox;