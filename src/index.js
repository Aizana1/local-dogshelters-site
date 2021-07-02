import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';
import App from './App';

ReactDOM.render(
   <React.Fragment>
    <Provider store={store}>
    <BrowserRouter>
    <Route path = "/" component = {App} />
    </BrowserRouter>
    </Provider>
   </React.Fragment>,
  document.getElementById('root')
);

