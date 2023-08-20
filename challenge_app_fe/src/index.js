import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
    // document.getElementById('root')
);
