import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import AgGrid from '../pages/agGrid/agGrid';
import AgGridInline from '../pages/agGridInline/agGridInline';
import Login from '../pages/login/login';
import Pagin from '../pages/pagin/pagin';
import ProductList from '../pages/productList/productList';

const AppRoutes = () => {
    const isLogin = !!localStorage.getItem('token')
    // const isLogin = true


    return (
        <>
            <BrowserRouter>
                  <Routes>
                        <Route path='/' element={!isLogin ?<Navigate to="/login"/>:<ProductList/>} />
                        <Route path='/paging' element={!isLogin ?<Navigate to="/login"/>:<Pagin/>} />
                        <Route path='/agGrid' element={!isLogin ?<Navigate to="/login"/>:<AgGrid/>} />
                        <Route path='/aggridinline' element={!isLogin ?<Navigate to="/login"/>:<AgGridInline/>} />
                        <Route path='/login' element={isLogin ?<Navigate to="/"/> :<Login/>} />

                  </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;