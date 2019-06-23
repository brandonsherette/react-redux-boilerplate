import React from 'react';
import PropTypes from 'prop-types';

export const GridLayout = ({ className, children, numOfCol }) => (
  <div className={`layout gridLayout gridCol--${numOfCol} ${className}`}>
    {children}
  </div>
);

GridLayout.propTypes = {
  className: PropTypes.string,
  numOfCol: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

GridLayout.defaultProps = {
  className: '',
  numOfCol: 3,
};

export default GridLayout;