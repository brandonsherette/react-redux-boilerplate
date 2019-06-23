import React from 'react';
import PropTypes from 'prop-types';

export const IconCheckBox = ({ isChecked, showUncheckedAsFalse }) => {
  if (isChecked) {
    return (<i className="iconCheckBox far fa-check-square text-success" />);
  }

  if (showUncheckedAsFalse) {
    return (
      <i className="iconCheckBox far fa-square position-relative">
        <small><i className="iconCheckBox__false fas fa-times position-absolute-center text-danger" /></small>
      </i>
    )
  }

  return (<i className="iconCheckBox far fa-square" />);
}

IconCheckBox.propTypes = {
  checkClassName: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  showUncheckedAsFalse: PropTypes.bool,
};

IconCheckBox.defaultProps = {
  showUncheckedAsFalse: false,
};

export default IconCheckBox;