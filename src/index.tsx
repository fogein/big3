import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './core/redux/store';
import MainRouter from './router';

import './index.scss';
import 'normalize.css'
import './styles/myNormalize.scss'


const app = (<>
    <Provider store={store}>
        <MainRouter/>
    </Provider></>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
