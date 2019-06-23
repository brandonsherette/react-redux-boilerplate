import React from 'react';
import PropTypes from 'prop-types';

export const FlexLayout = ({ className, children, numOfCol }) => (
  <div className={`layout flexLayout flexCol--${numOfCol} ${className}`}>
    {children}
  </div>
);

FlexLayout.propTypes = {
  className: PropTypes.string,
  numOfCol: PropTypes.oneOf([0,1,2,3,4]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

FlexLayout.defaultProps = {
  className: '',
  numOfCol: 0,
};

export default FlexLayout;