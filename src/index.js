import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import multi from "redux-multi";
import promise from "redux-promise";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
