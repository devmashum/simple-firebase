import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='ml-5'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;