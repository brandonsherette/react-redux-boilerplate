import React from 'react';
import PropTypes from 'prop-types';
import getRootNavItemList from '~util/getRootNavItemList';
import { Link } from 'react-router-dom';
import withRouter from '~components/hoc/withRouter';
import classNames from 'classnames';

const NavMenu = ({ pathname }) => (
  <div className="navMenu">
    <h1>React Redux Boilerplate</h1>
    <ul>
      {getRootNavItemList().map(item => (
        <li key={item.path}>
          <Link 
            className={classNames({
              'active': pathname === item.path
            })}
            to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

NavMenu.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default withRouter(NavMenu);