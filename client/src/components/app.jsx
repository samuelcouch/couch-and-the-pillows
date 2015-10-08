import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Page from 'components/pages/page';
import Header from 'components/header/header';
import Sidebar from 'components/sidebar/sidebar';

// Load component styles
require('./app.scss');

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <div className="app__top-section">
          <Header />
        </div>
        <div className="app__middle-section">
          <Page target={this.props.children} />
        </div>
      </div>
    );
  }
}

import HomePage from 'components/pages/home/home';
import LiveMapPage from 'components/pages/livemap/livemap';
import NotFoundPage from 'components/pages/404/404';

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/map" component={LiveMapPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);