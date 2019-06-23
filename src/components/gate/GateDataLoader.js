import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconLoadingSpinner from '~components/icon/IconLoadingSpinner';

class GateDataLoader extends Component {
  componentDidMount() {
    if (!this.props.ignoreInitialLoadRequest) {
      this.props.onLoadRequest();
    }
  }

  render() {
    const { 
      className,
      children, 
      error, 
      isLoading, 
      onLoadRequest, 
      showChildrenOnError,
      showRetryButton
    } = this.props;

    const isErrorArray = (Array.isArray(error));
    const hasError = (isErrorArray && error.length > 0) || (!isErrorArray && error) ? true : false;
    const rootClassName = `components-gateDataLoader gateDataLoader ${className}`;

    if (hasError) {
      return (
        <div className={rootClassName}>
          {isErrorArray && (
            <div className="text-danger">
              <h1><i className="fa fa-times-circle" />&nbsp;Uh Oh. There was a problem.</h1>
              <ul>
                {error.map(err => (
                  <li key={'error-' + err}>{err}</li>
                ))}
              </ul>
            </div>
          )}
          {!isErrorArray && (
            <h1 className="text-danger"><i className="fa fa-times-circle" />&nbsp;{error}</h1>
          )}
          {showRetryButton && (
            <div className="retry-button-wrapper">
              <br />
              <button type="button" className="btn btn-primary" onClick={() => onLoadRequest()}>Retry</button>
            </div>
          )}
          {showChildrenOnError && children}
        </div>
      );
    }

    return (!isLoading) ? children : (
      <div className={rootClassName}><IconLoadingSpinner /></div>
    );
  }
}

GateDataLoader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onLoadRequest: PropTypes.func.isRequired,
  ignoreInitialLoadRequest: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  showChildrenOnError: PropTypes.bool,
  showRetryButton: PropTypes.bool,
};

GateDataLoader.defaultProps = {
  className: '',
  error: '',
  ignoreInitialLoadRequest: false,
  showChildrenOnError: false,
  showRetryButton: false,
};

export default GateDataLoader;