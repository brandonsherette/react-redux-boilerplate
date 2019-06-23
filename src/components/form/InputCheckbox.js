import React from 'react';
import PropTypes from 'prop-types';

export const InputCheckbox = ({ className, label, hideLabel, input, shape, type }) => (
  <div className={`form-component inputCheckbox ${className}`}>
    <label className={`inputCheckbox__label type-${type}-wrapper`} htmlFor={input.name}>
      <input id={input.name} type="checkbox" {...input} checked={input.value} />
      <span className="inputCheckbox__label__content d-flex align-items-center">
        <span className={`${type} ${shape}`}></span>
        {!hideLabel && <span className="inputCheckbox__label__content__label d-block">{label}</span>}
      </span>
    </label>
  </div>
);

InputCheckbox.propTypes = {
  className: PropTypes.string,
  hideLabel: PropTypes.bool,
  label: PropTypes.any,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  }),
  shape: PropTypes.oneOf(['', 'round']),
  type: PropTypes.oneOf(['default', 'switch']),
};

InputCheckbox.defaultProps = {
  className: '',
  hideLabel: false,
  shape: '',
  type: 'default',
};

export default InputCheckbox;