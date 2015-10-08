import React from 'react';

// Load component styles
require('./page.scss');

export default class Page extends React.Component {
  static propTypes = {
    target: React.PropTypes.any.isRequired
  }

  render() {
    return (
      <div className="page">{this.props.target}</div>
    );
  }
}