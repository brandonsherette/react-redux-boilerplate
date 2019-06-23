import React from 'react';
import PropTypes from 'prop-types';

export const InputHidden = ({ name, input }) => (
  <input type="hidden" className="form-component hidden" name={name} {...input} />
);

InputHidden.propTypes = {
  name: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default InputHidden;