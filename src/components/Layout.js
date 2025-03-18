import React from 'react';


const Layout = ({ children }) => {
    return (
        <div>
            <header>
                {/* here comes humburger menu */}
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};



export default Layout;