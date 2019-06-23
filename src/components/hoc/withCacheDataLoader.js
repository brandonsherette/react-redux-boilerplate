import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GateInProgress from '~components/gate/GateInProgress';
import GateError from '~components/gate/GateError';

export default (WrappedComponent) => {
  class HOCCacheDataLoader extends Component {
    componentDidMount() {
      if (!this.props.loadingStatus.isLoaded && !this.props.loadingStatus.isLoading) {
        this.props.onLoadRequest();
      }
    }
  
    render() {
      const { loadingStatus, onLoadRequest } = this.props;

      return (
        <GateError error={loadingStatus.error} onRetry={onLoadRequest}>
          <GateInProgress inProgress={!loadingStatus.isLoaded}>
            <WrappedComponent {...this.props} />
          </GateInProgress>
        </GateError>
      );
    }
  }
  
  HOCCacheDataLoader.propTypes = {
    loadingStatus: PropTypes.shape({
      error: PropTypes.string.isRequired,
      isLoaded: PropTypes.bool.isRequired,
      isLoading: PropTypes.bool.isRequired,
    }).isRequired,
    onLoadRequest: PropTypes.func.isRequired,
  };
  
  return HOCCacheDataLoader;
};

