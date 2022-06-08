import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css'
import App from './App';

import store from './redux/store'; //引入创建的初始store和持久化persistor
import { Provider } from 'react-redux';
// i18n
import './i18n/configs';
// axios header设置

import axios from 'axios';
//axios.defaults.headers['x-icode']='FB80558A73FA658E';

// 
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={rootStore.persistor}>
      <App />
    </PersistGate> */}
    <App/>
  </Provider>

);


