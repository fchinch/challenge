import { combineReducers } from 'redux';
import filesReducer from './fileReducer';
import filesSliceReducer from './filesSlice';

const rootReducer = combineReducers({
  filesRed: filesReducer,           // Use appropriate key for fileReducer
  filesSlice: filesSliceReducer // Use appropriate key for filesSlice
  // Add other reducers here...
});

export default rootReducer;
