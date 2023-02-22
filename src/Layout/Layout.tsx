import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './NavBar/Navbar';

interface LayoutProps {
children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
<>
<div className='bg-main text-white'>
<Navbar />
{children}
<Footer />
</div>
</>
);
};

export default Layout;
