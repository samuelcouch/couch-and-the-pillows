import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import Store from 'flux/store';
import Page from 'components/pages/page';
import Header from 'components/header/header';
import Sidebar from 'components/sidebar/sidebar';

// Load component styles
require('./app.scss');

@connect(state => ({ sidebarVisible: state.ui.sidebarVisible }))
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar visible={this.props.sidebarVisible} />

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
  <Provider store={Store}>
    {() => {
      return (
        <Router>
          <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/map" component={LiveMapPage}/>
            <Route path="*" component={NotFoundPage}/>
          </Route>
        </Router>
      );
    }}
  </Provider>
);