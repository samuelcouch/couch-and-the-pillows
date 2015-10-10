import { combineReducers, createStore } from 'redux';

import ui from 'flux/ui/reducer';

const reducers  = combineReducers({ ui });
const store     = createStore(reducers);

export default store;