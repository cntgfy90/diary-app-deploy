import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import throttle from 'lodash/throttle';
import { saveState } from './localStorage.js';
import DiaryApp from './components/DiaryApp';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

const store = configureStore();

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000))



ReactDOM.render(
    <Provider store={store}>
        <DiaryApp />
    </Provider>,
    document.getElementById('root')
);
