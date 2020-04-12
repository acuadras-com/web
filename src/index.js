import React from 'react';
import ReactDOM from 'react-dom';
import smartlookClient from 'smartlook-client'
import ReactGA from 'react-ga';
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
ReactGA.initialize('UA-163455751-1');
smartlookClient.init('763dcf37c7a980e6e9989d1fb4be0f1f46873618')

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
