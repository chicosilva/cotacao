import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootStore = createStore(reducers, devTools, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ rootStore }>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
