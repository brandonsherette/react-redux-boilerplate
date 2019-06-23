import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const InputText = ({
  autoComplete,
  className,
  disabled,
  label,
  helpText,
  hideError,
  placeholder,
  meta,
  input,
  inputSize,
  required,
  type
}) => (
    <div className={'form-component inputText ' + className}>
      <div className="form-group">
        {label.length > 0 && (
          <label htmlFor={input.name}>
            {required && <span className="text-danger">*&nbsp;</span>}{label}
          </label>
        )}
        <input
          autoComplete={autoComplete}
          type={type}
          className={classNames('form-control form-control-' + inputSize, {
            'is-invalid': meta && meta.submitFailed && meta.error ? true : false,
            'is-valid': meta && meta.submitFailed && !meta.error ? true : false,
          })}
          aria-describedby={`${input.name}Help`}
          placeholder={placeholder}
          disabled={disabled}
          {...input}
        />
        {!hideError && meta && meta.submitFailed && meta.error !== undefined && (
          <small id={`${input.name}Error`} className="form-text text-danger">{meta.error}</small>
        )}
        <small
          id={`${input.name}Help`}
          className="form-text text-muted">{helpText}</small>
      </div>
    </div>
  );

InputText.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.any,
  helpText: PropTypes.any,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputSize: PropTypes.oneOf(['sm', 'lg', '']),
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  hideError: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  meta: PropTypes.shape({
    error: PropTypes.string.isRequired,
    submitFailed: PropTypes.bool.isRequired,
  }),
};

InputText.defaultProps = {
  autoComplete: '',
  className: '',
  label: '',
  helpText: '',
  inputSize: '',
  type: 'text',
  placeholder: '',
  required: false,
  disabled: false,
};

export default InputText;