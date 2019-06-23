import React from 'react';
import PropTypes from 'prop-types';
import { IconWarning } from '~components/icon';

export const GateNoRecordFound = ({ children, className, title, isRecordFound }) => {
  if (!isRecordFound) {
    return (
      <div className={`components-gateNoRecordFound gateNoRecordFound ${className}`}>
        <h2><IconWarning />&nbsp;{title}</h2>
      </div>
    );
  }

  return children;
}

GateNoRecordFound.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  isRecordFound: PropTypes.bool.isRequired,
};

GateNoRecordFound.defaultProps = {
  className: '',
  title: 'No Record Found',
};

export default GateNoRecordFound;