import React from 'react';
import PropTypes from 'prop-types';
import IconLoadingSpinner from '~components/icon/IconLoadingSpinner';

export const GateInProgress = ({ children, className, inProgress }) => {
  if (inProgress) {
    return (
      <div className={`components-inProgressWrapper ${className}`}>
        <IconLoadingSpinner />
      </div>
    );
  }

  return children;
}

GateInProgress.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inProgress: PropTypes.bool.isRequired,
};

export default GateInProgress;