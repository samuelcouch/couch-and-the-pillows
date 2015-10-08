import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menu/menu-item';

// Load component styles
require('./sidebar.scss');

export default class Sidebar extends React.Component {
  static menuItems = [
    { route: '/', text: 'Home' }
  ]

  state = {
    navOpen: false
  }

  openLeftNav = () => {
    if (!this.state.navOpen) {
      this.refs.leftNav.toggle();
    }
  }

  closeLeftNav = () => {
    this.refs.leftNav.close();
  }

  handleLeftNavOpened = () => {
    this.state.navOpen = true;
  }

  handleLeftNavClosed = () => {
    this.state.navOpen = false;
  }

  render() {
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        onNavOpen={this.handleLeftNavOpened}
        onNavClose={this.handleLeftNavClosed}
        menuItems={Sidebar.menuItems} />
    );
  }
}