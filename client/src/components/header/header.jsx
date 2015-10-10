import React from 'react';

import { dispatch } from 'flux/store';
import { showSidebar } from 'flux/ui/action-creators';

// Load component styles
require('./header.scss');

export default class Header extends React.Component {
  onClick = () => {
    dispatch(showSidebar());
  }

  render() {
    return (
      <div className="header" onClick={this.onClick} />
    );
  }
}