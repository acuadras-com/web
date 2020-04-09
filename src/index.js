import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/shopUserReducer';

const initialState = {
    "user": {},
    "shop": {},
    "location": {},
    "loading":false,
    "error": ''
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
