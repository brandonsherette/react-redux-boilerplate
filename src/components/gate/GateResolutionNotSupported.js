import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GateResolutionNotSupported extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: false,
    };

    this.MIN_WIDTH = 1366;
    this.handleOnResize = this.handleOnResize.bind(this);
    this.originalOnResize = window.onresize;
  }

  componentDidMount() {
    // take control of onresize
    window.onresize = this.handleOnResize;
    this.evalWindowSize();
  }

  componentWillUnmount() {
    // release resize back to original function call
    window.onresize = this.originalOnResize;
  }

  evalWindowSize() {
    const width = window.innerWidth;

    if (width < this.MIN_WIDTH && !this.state.showWarning) {
      // turn on warning since invalid width and show warning was off
      this.setState({
        showWarning: true,
      });
    } else if (width >= this.MIN_WIDTH && this.state.showWarning) {
      // turn off warning since it's a valid width and showWarning was previously true
      this.setState({
        showWarning: false,
      });
    }
  }

  handleOnResize(focusEvent) {
    this.evalWindowSize();
    // bubble up original onresize to allow any other resize handlers to still perform as intended if viable
    if (this.originalOnResize && typeof this.originalOnResize === 'function') {
      this.originalOnResize(focusEvent);
    }
  }

  render() {
    const { className, children } = this.props;

    if (this.state.showWarning) {
      return (
        <div className={`gateResolutionNotSupported ${className}`}>
          <h1>Resolution Not Supported</h1>
          <p>The resolution on your device is currently not supported.</p>
        </div>
      );
    }

    return children
  }
}

GateResolutionNotSupported.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

GateResolutionNotSupported.defaultProps = {
  className: '',
};

export default GateResolutionNotSupported;