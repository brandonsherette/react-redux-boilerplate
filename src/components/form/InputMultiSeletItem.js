import React from 'react';
import PropTypes from 'prop-types';
import IconCheckBox from '~components/icon/IconCheckBox';

export const InputMultiSelectItem = ({ className, isSelected, option }) => (
  <div className={`form-component inputMultiSelectItem d-flex d-flex-spacing align-items-center ${className}`}>
    <div><IconCheckBox isChecked={isSelected} /></div>
    <div>{option.display}</div>
  </div>
);

InputMultiSelectItem.propTypes = {
  className: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,
  option: PropTypes.shape({
    value: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  }).isRequired,
};

InputMultiSelectItem.defaultProps = {
  className: '',
};

export default InputMultiSelectItem;