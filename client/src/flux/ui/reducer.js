import assign from 'object-assign';

import { TOGGLE_SIDEBAR } from './actions';

const INITIAL_STATE = {
  sidebarVisible: false
};

export default function UIReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOGGLE_SIDEBAR:
    return assign({}, state, { sidebarVisible: !state.sidebarVisible });
  default:
    return state;
  }
};