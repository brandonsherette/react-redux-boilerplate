import React from 'react';
import PropTypes from 'prop-types';

export const Fieldset = ({ className, children, title }) => (
  <div className={`form-component fieldset ${className}`}>
    <div className="fieldset__header">
      <div className="fieldset__header__title">{title}</div>
    </div>
    <div className="fieldset__box">
      <div className="fieldset__body">
        {children}
      </div>
    </div>
  </div>
);

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

Fieldset.defaultProps = {
  className: '',
};

export default Fieldset;