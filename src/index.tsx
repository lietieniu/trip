import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css'
import App from './App';
// 全局store
import {store} from './redux/store'
import { Provider } from 'react-redux';
// i18n
import './i18n/configs';
// axios header设置

import axios from 'axios';
//axios.defaults.headers['x-icode']='FB80558A73FA658E';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);


