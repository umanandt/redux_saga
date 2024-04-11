// it combines the reducers
// for instance, if we have made more than
// one reducers to do different task then
// need to combine them

import {combineReducers} from 'redux';
import {reducer} from './reducer';

/*
export default combineReducers({
  reducer,
});
*/

const rootReducer = combineReducers({
  reducer,
})

export default rootReducer