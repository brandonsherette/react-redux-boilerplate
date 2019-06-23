import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconLock from '~components/icon/IconLock';

export const InputMultiSelect = ({
  ItemComponent,
  required,
  hideError,
  label,
  name,
  input,
  options,
  meta,
  disabled,
  ...rest
}) => (
    <div className="form-component inputMultiSelect">
      <div className="form-group">
        {label !== null && (
          <label>
            {required && !disabled && <span className="text-danger">*&nbsp;</span>}
            {disabled && <IconLock className="text-warning mr-1" />}
            {label}
          </label>
        )}
        <div className="inputMultiSelect__container">
          {options.map(option => {
            const isSelected = input && input.value[option.value] ? true : false;
            // check if check
            return (
              <div
                key={option.value}
                className={classNames(`inputMultiSelect__itemWrapper`, {
                  'inputMultiSelect__itemWrapper--selected': isSelected,
                  'inputMultiSelect__itemWrapper--disabled': disabled,
                })}
                disabled={disabled}
                role="button"
                onClick={() => {
                  // prevent click action if disabled
                  if (disabled) { return; }

                  const nextState = input.value ? Object.assign({}, input.value) : {};
                  if (input.value[option.value]) {
                    // need to remove
                    delete nextState[option.value];
                  } else {
                    // need to add it
                    nextState[option.value] = option.value;
                  }

                  input.onChange(nextState);
                }}
              >
                <ItemComponent isSelected={isSelected} option={option} {...rest} />
              </div>
            );
          })}
        </div>
        {!hideError && meta && meta.submitFailed && meta.error !== undefined && (
          <small id={`${name}Error`} className="form-text text-danger">{meta.error}</small>
        )}
      </div>
    </div>
  );

InputMultiSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  ItemComponent: PropTypes.func.isRequired,
  hideError: PropTypes.bool,
  meta: PropTypes.shape({
    submitFailed: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
  input: PropTypes.shape({
    value: PropTypes.objectOf(PropTypes.any),
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  })).isRequired,
};

InputMultiSelect.defaultProps = {
  disabled: false,
  label: null,
  required: false,
  hideError: false,
};

export default InputMultiSelect;