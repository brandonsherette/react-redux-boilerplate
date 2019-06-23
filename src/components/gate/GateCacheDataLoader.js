import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GateInProgress from './GateInProgress';
import GateError from './GateError';

class GateCacheDataLoader extends Component {
  componentDidMount() {
    if (!this.props.isLoaded && !this.props.isLoading) {
      this.props.onLoadRequest();
    }
  }

  render() {
    const { children, error, isLoaded, onLoadRequest } = this.props;

    return (
      <GateError error={error} onRetry={onLoadRequest}>
        <GateInProgress inProgress={!isLoaded}>
          {children}
        </GateInProgress>
      </GateError>
    );
  }
}

GateCacheDataLoader.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoadRequest: PropTypes.func.isRequired,
};

export default GateCacheDataLoader;