import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar/Navbar';

interface LayoutProps {
children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
<>
<div className='bg-main text-white'>
<NavBar />
{children}
<Footer />
</div>
</>
);
};

export default Layout;
