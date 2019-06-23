import React from 'react';
import PropTypes from 'prop-types';
import { AppHeader } from '~components/app/';
import { Route, Switch } from 'react-router';
import getRootNavItemList from '~util/getRootNavItemList';
import PageHome from '~pages/PageHome';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router';

class App extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div className="app">
        <AppHeader />
        <TransitionGroup className="position-relative">
          <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
            <Switch location={location}>
              {getRootNavItemList().map((item, key) => (
                <Route exact key={key} path={item.path} component={item.component} />
              ))}
              <Route component={PageHome} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.any,
};

export default withRouter(App);