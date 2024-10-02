import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import UserAuth from './UserAuth/UserAuth';
import {Provider} from 'react-redux'
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <UserAuth>
    <RouterProvider router={router}></RouterProvider>
    </UserAuth>
    </Provider>    
  </React.StrictMode>
);


