import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import classNames from 'classnames';

export class InputSelectAdv extends Component {
  render() {
    const { input, isRequired, label, valid, dirty, options, touched } = this.props;
    const inputProps = Object.assign({}, input, {
      onChange: (option) => input.onChange(option ? option.value : ''),
      value: options.find(option => option.value === input.value),
    });

    return (
      <div className="form-component inputSelectAdv form-group">
        <label htmlFor={input.name}>
          {isRequired && <span className="text-danger">*&nbsp;</span>}{label}
        </label>
        <Select 
          onChange={inputProps.onChange}
          value={inputProps.value}
          options={options}
          className={classNames('form-control-select', {
            'valid': (valid),
            'invalid': (!valid && (dirty || touched))
          })}
        />
      </div>
    );
  }
}

InputSelectAdv.propTypes = {
  label: PropTypes.any,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }),
  dirty: PropTypes.bool,
  touched: PropTypes.bool,
  valid: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  meta: PropTypes.shape({
    error: PropTypes.string.isRequired,
    submitFailed: PropTypes.bool.isRequired,
  }),
  isRequired: PropTypes.bool,
};

InputSelectAdv.defaultProps = {
  isRequired: false,
};

export default InputSelectAdv;