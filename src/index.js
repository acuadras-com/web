import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const initialState = {
    "user": {},
    "shop": {}
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
