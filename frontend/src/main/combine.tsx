import HomePage from "../home/HomePage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SinglePage from "./watch/SinglePage"
import Header from "./header/Header"
import Footer from "./footer/Footer"


interface LayoutProps {
  children?: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <>
  <div className='bg-main text-white'>
  <Header />
  {children}
  <HomePage/>
  <SinglePage />
  <Footer />
  </div>
  </>
  );
  };
  
  export default Layout;