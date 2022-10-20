import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;