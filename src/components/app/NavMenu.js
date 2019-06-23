import React from 'react';
import PropTypes from 'prop-types';
import getRootNavItemList from '~util/getRootNavItemList';
import { Link } from 'react-router-dom';
import { withRouter } from '~hoc/';
import classNames from 'classnames';

const NavMenu = ({ location }) => (
  <div className="navMenu">
    <ul>
      {getRootNavItemList().map(item => (
        <li key={item.path}>
          <Link 
            className={classNames({
              'active': location.pathname === item.path
            })}
            to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

NavMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(NavMenu);