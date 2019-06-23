import React from 'react';
import NavMenu from './NavMenu';

const AppHeader = () => (
  <div className="components-app-header">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="title-primary">React Redux Boilerplate</h2>
        <div className="nav-group">
          <NavMenu />
        </div>
      </div>
    </div>
  </div>
);

export default AppHeader;