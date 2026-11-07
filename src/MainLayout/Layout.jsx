import Navbar from './Navber';
import Footer from './Footer';
import { Outlet } from 'react-router';
import MobileFooter from './MobileFooter';

const Layout = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main
                id="main-content"
                className="mx-auto min-h-[calc(100vh-370px)] pt-17  sm:pt-15 "
            >
                <Outlet />
            </main>

            <Footer />

            <div className='sticky bottom-6 z-40 mt-4'>
                <MobileFooter />
            </div>
        </div>
    );
};

export default Layout;
