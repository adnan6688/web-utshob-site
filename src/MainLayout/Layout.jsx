import React from 'react';
import Navbar from './Navber';
import Footer from './Footer';
import { Outlet } from 'react-router';
import MobileFooter from './MobileFooter';

const Layout = () => {
    return (
        <div>
            <Navbar />

            <div className='min-h-[calc(100vh-370px)]  sm:p-0 mx-auto'>
                <Outlet />
            </div>

            <Footer />

            <div className='sticky bottom-6'>
                <MobileFooter />
            </div>
        </div>
    );
};

export default Layout;
