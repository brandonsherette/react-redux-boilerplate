import React, { Component } from 'react';

export default (WrappedComponent) => {
  class HOCToggle extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };

      this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      const { isOpen } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          isOpen={isOpen}
          onToggle={this.handleToggle} />
      );
    }
  }

  return HOCToggle;
}