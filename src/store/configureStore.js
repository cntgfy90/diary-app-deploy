import { createStore, combineReducers } from 'redux';
import { loadState } from '../localStorage';
import { items } from '../reducers/items';

const persistedState = loadState();

// ### ToDo ###
// Devide the reducer on some pieces.
const diaryApp = combineReducers({
    items
});

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
    const store = createStore(diaryApp, persistedState, reduxDevTools);
    return store;
}