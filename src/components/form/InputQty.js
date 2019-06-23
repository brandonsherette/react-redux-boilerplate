import React from 'react';
import PropTypes from 'prop-types';
import InputSelect from './InputSelect';

export const InputQty = ({ className, max, optionSuffix, ...props }) => {
  const options = [(
    <option key="qty-0" value="">Select</option>
  )];

  let count = 1;
  while (count <= max) {
    let label = `${count} ${optionSuffix}`;
    if (count > 1 && optionSuffix) {
      label += 's';
    }

    options.push((
      <option key={`qty-${count}`} value={count}>{label}</option>
    ));

    count += 1;
  }

  return (
    <InputSelect className={`inputQty ${className}`} {...props}>
      {options}
    </InputSelect>
  );
}

InputQty.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number.isRequired,
  optionSuffix: PropTypes.string,
};

InputQty.defaultProps = {
  className: '',
  optionSuffix: '',
};

export default InputQty;