import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menu/menu-item';

import { dispatch } from 'flux/store';
import { hideSidebar } from 'flux/ui/action-creators';

// Load component styles
require('./sidebar.scss');

export default class Sidebar extends React.Component {
  static propTypes = {
    visible: React.PropTypes.bool.isRequired
  }

  static menuItems = [
    { route: '/', text: 'Home' }
  ]

  state = {
    navOpen: false
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) this.openLeftNav();
      else this.closeLeftNav();
    }
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
    dispatch(hideSidebar());
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