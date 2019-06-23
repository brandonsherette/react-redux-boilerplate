import React from 'react';
import PropTypes from 'prop-types';
import { IconError } from '~components/icon';
import { Alert } from 'reactstrap';

export const GateError = ({ children, className, error, onRetry }) => {
  if (error) {
    return (
      <div className={`components-gateError gateError ${className}`}>
        <Alert color="danger">
          <h3 className="my-0"><IconError className="text-danger" />&nbsp;{error}</h3>
        </Alert>
        {onRetry !== null && (
          <div className="mt-3">
            <button type="button" className="btn btn-primary" onClick={() => onRetry()}>Retry</button>
          </div>
        )}
      </div>
    );
  }

  return children;
}

GateError.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.string,
  onRetry: PropTypes.func,
};

GateError.defaultProps = {
  children: null,
  className: '',
  onRetry: null,
};

export default GateError;