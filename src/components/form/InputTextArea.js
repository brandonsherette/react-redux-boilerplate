import React from 'react';
import PropTypes from 'prop-types';

export const InputTextArea = ({
  autoComplete,
  className,
  label,
  helpText,
  placeholder,
  input,
  inputSize,
  required,
}) => (
    <div className={'form-component inputTextArea ' + className}>
      <div className="form-group">
        {label.length > 0 && (
          <label htmlFor={input.name}>
            {required && <span className="text-danger">*&nbsp;</span>}{label}
          </label>
        )}
        <textarea
          autoComplete={autoComplete}
          className={'form-control form-control-' + inputSize}
          aria-describedby={`${input.name}Help`}
          placeholder={placeholder}
          {...input}
        ></textarea>
        <small
          id={`${input.name}Help`}
          className="form-text text-muted">{helpText}</small>
      </div>
    </div>
  );

InputTextArea.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.any,
  helpText: PropTypes.any,
  placeholder: PropTypes.string,
  inputSize: PropTypes.oneOf(['sm', 'lg', '']),
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  required: PropTypes.bool,
};

InputTextArea.defaultProps = {
  autoComplete: '',
  className: '',
  label: '',
  helpText: '',
  inputSize: '',
  type: 'text',
  placeholder: '',
  required: false,
};

export default InputTextArea;