import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ className, children }) => (
  <div className={`page ${className}`}>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
};

Page.defaultProps = {
  className: '',
};

export default Page;