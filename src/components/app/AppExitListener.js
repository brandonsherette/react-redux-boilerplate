import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AppExitListener extends Component {
  componentDidMount() {
    this._handleOnBeforeUnload = this._handleOnBeforeUnload.bind(this);
    window.onbeforeunload = this._handleOnBeforeUnload;
  }

  render() {
    return (
      <div className="componentrs-appExitListener" style={{display: 'none'}}></div>
    );
  }

  _handleOnBeforeUnload() {
    if (this.props.hasUnsavedChanges) {
      return 'You have unsaved changes. Please save them before leaving this page.';
    }
  }
}

AppExitListener.propTypes = {
  hasUnsavedChanges: PropTypes.bool.isRequired,
};

export default AppExitListener;