import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './containers/app-container';

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, document.getElementById('root'));