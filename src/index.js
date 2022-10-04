import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/project1.min.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import { Provider } from 'react-redux';
import store from './store/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').style.width ='100%'
document.getElementById('root').style.height ='100%'


root.render(
  <Provider store={store}>
      <AppRoutes />
  </Provider>
);


