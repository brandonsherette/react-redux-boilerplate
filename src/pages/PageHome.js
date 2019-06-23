import React from 'react';
import getRootNavItemList from '~util/getRootNavItemList';
import { Link } from 'react-router-dom';
import { Page } from '~/components/layout';

const PageHome = () => (
  <Page className="pageHome">
    <div className="container">
      <div className="jumbotron text-center my-3">
        <h1>Redux App Boilerplate</h1>
        <p>Boilerplate for React Redux applications.</p>
        <p>To get started, click on one of the main nav links below to get started.</p>

        <div className="d-flex justify-content-center">
          {getRootNavItemList().map((item) => (
            <div key={item.title} className="p-2"><Link to={item.path} className="btn btn-primary">{item.title}</Link></div>
          ))}
        </div>
      </div>
    </div>
  </Page>
);

export default PageHome;