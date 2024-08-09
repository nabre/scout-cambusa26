import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <Main>
                 {children}
            </Main>           
            <Footer />
        </div>
    );
}

export default Layout;