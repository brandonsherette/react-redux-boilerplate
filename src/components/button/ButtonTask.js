import React from 'react';
import PropTypes from 'prop-types';

export const ButtonTask = ({ children, className, color, disabled, inProgress, showSpinner, ...rest }) => (
  <button
    className={`buttonTask btn btn-${color} ${className}`}
    disabled={inProgress || disabled}
    {...rest}
  >
    {inProgress && showSpinner && <i className="fa fa-spinner fa-spin" />}
    {(!inProgress || !showSpinner) && children}
  </button>
);

ButtonTask.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inProgress: PropTypes.bool.isRequired,
  showSpinner: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
};

ButtonTask.defaultProps = {
  color: 'primary',
  className: '',
  disabled: false,
  onClick: () => {},
  showSpinner: true,
  type: 'button',
};

export default ButtonTask;