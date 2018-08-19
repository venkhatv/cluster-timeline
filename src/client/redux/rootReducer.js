// Application rootreducer file

import { combineReducers } from 'redux';
import timelineReducer from '../bundles/timeline/redux/timelineReducer';

const rootReducer = combineReducers({
  timelineReducer,
});

export default rootReducer;
