import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';
import App from './routes/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import Context from './Context'

const initialState = {
    "user": {},
    "shop": {},
    "location": {},
    "loading":false,
    "error": '',
    "categories": [
        {
            "id":1,
            "name": 'Fruver',
            "icon": '/img/icono-ensalada.jpg',
            "path":''
        },
        {
            "id":2,
            "name": 'Drogerias',
            "icon": '/img/icono_farmacia.JPG',
            "path":''
        },
        {
            "id":3,
            "name": 'Menu',
            "icon": '/img/icono_cheff.png',
            "path":''
        },
        {
            "id":4,
            "name": 'Carnicería',
            "icon": '/img/icono_cheff.png',
            "path":''
        },
        {
            "id":5,
            "name": 'Ferrreteria',
            "icon": '/img/icono_cheff.png',
            "path":''
        }
    ]
}

ReactGA.initialize('UA-163455751-1');

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk));

ReactDOM.render(
    <Context.Provider>
        <Provider store={store}>
            <App />
        </Provider>
    </Context.Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
