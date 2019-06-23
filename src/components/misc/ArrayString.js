import React from 'react';
import PropTypes from 'prop-types';
import IconEmpty from './icon/IconEmpty';

export const ArrayString = ({ items, type }) => {
  if (!items || items.length === 0) {
    return <div className="arrayString"><IconEmpty /></div>
  }

  if (type === 'inline') {
    return (
      <div className="arrayString arrayString--inline">{items.join(', ')}</div>
    );
  }

  return (
    <div className="arrayString arrayString--stack">
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

ArrayString.propTypes = {
  items: PropTypes.array,
  type: PropTypes.oneOf(['inline', 'stack']),
};

ArrayString.defaultProps = {
  type: 'inline',
};

export default ArrayString;