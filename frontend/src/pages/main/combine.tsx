import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Video from "./other/video";
import Movies from "./other/Allmovies";

interface LayoutProps {
  children?: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <>
  <div className='bg-main text-white'>
  <Header />
  {children}
    <Video/>
    <Movies/>
  <Footer />
  </div>
  </>
  );
  };
  
  export default Layout;