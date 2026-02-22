import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../BottomNav';

const Layout: React.FC = () => {
    return (
        <div className="mobile-container">
            <main style={{ flex: 1, paddingBottom: '80px' }}>
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
};

export default Layout;
