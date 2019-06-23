
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconLock from '~components/icon/IconLock';

export const InputSelect = ({ className, hideError, disabled, label, input, required, children, meta }) => (
  <div className={`form-component inputSelect ${className}`}>
    <div className="form-group">
      {label && label.length > 0 && (
        <label htmlFor={input.name}>
          {required && !disabled && <span className="text-danger">*&nbsp;</span>}
          {disabled && <IconLock className="text-warning mr-1" />}
          {label}
        </label>
      )}
      <select
        {...input}
        className={classNames('form-control', {
          'is-invalid': meta && meta.submitFailed && meta.error ? true : false,
          'is-valid': meta && meta.submitFailed && !meta.error ? true : false,
        })}
        id={input.name}
        disabled={disabled}>{children}</select>
      {!hideError && meta && meta.submitFailed && meta.error !== undefined && (
        <small id={`${input.name}Error`} className="form-text text-danger">{meta.error}</small>
      )}
    </div>
  </div>
);

InputSelect.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string,
  label: PropTypes.any,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  required: PropTypes.bool,
  hideError: PropTypes.bool,
  disabled: PropTypes.bool,
  meta: PropTypes.shape({
    error: PropTypes.string.isRequired,
    submitFailed: PropTypes.bool.isRequired,
  }),
};

InputSelect.defaultProps = {
  className: '',
  label: '',
  required: false,
  disabled: false,
  hideError: false,
};

export default InputSelect;