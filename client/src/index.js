import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import Store from "./store/Store.js";
import {Provider} from "react-redux"; 
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={Store}>
        <App />
    </Provider>         
);