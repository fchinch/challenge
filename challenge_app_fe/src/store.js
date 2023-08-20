import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers'

// const store = createStore(fileReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export default store;
