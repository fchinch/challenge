import React from 'react';
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const render = ( ui , { initialState, store = configureStore({ reducer: rootReducer, middleware: getDefaultMiddleware(), }), ...renderOptions } = {}) => {

  const Wrapper = ({ children }) =>{
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }