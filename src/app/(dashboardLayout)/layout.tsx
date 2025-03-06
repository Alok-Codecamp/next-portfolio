import React, { ReactNode } from 'react';

const DashboardLayout = ({children}:{children:ReactNode}) => {
    return (
        
        <main>
            <header><h1>dahsboard header</h1></header>
            {children}
            <footer><h2>Dash board footer</h2></footer>
        </main>
        
    );
}

export default DashboardLayout;
