import React from 'react';
import ReactDOM from 'react-dom';
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
