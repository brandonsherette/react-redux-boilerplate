import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from '~components/app/NavMenu';

export const AppSideMenuLayout = ({ children }) => (
  <div className="appSideMenuLayout">
    <div className="appSideMenuLayout__navMenu">
      <NavMenu />
    </div>
    <div className="appSideMenuLayout__body">
      <div className="appSideMenuLayout__body__content">
        {children}
      </div>
    </div>
  </div>
);

AppSideMenuLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AppSideMenuLayout;