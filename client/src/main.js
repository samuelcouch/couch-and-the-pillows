import React from 'react';

import Application from 'components/app';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
require('react-tap-event-plugin')();

// Adds roboto CSS to the <head/> of the page
require('roboto-fontface/css/roboto-fontface.css');

// Adds base CSS to the <head/> of the page
require('./base.scss');

React.render(Application, document.body);