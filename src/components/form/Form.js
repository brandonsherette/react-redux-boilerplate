import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({ className, children, ...props }) => (
  <form className={`form-component form ${className}`} {...props}>
    {children}
  </form>
);

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  className: '',
};

export default Form;