import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

export default (WrappedComponent) => {
  class HOCRouter extends Component {
    constructor(props) {
      super(props);

      this.handleGetLinkClassNames = this.handleGetLinkClassNames.bind(this);
    }

    handleGetLinkClassNames(path, defaultPath) {
      const { location } = this.props;

      if (!location || !path) {
        return '';
      }

      return classNames('nav-link', {
        'active': location.pathname.indexOf(path) !== -1 || defaultPath && defaultPath === location.pathname,
      });
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
          getLinkClassNames={this.handleGetLinkClassNames}
        />
      );
    }
  }

  HOCRouter.propTypes = {
    location: PropTypes.any,
  };

  const mapStateToProps = state => ({
    location: state.router.location,
  });

  return connect(mapStateToProps)(HOCRouter);
}