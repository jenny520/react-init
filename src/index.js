import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './store'
import './index.css'

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        {Routers}
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
