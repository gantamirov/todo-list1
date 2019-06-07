import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer, {initialState} from './store/reducer'
import { createStore, applyMiddleware } from "redux";

import './index.css';
import App from './App';

const store = createStore(reducer, initialState);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));