import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
//import NavFixed from '../Navs/NavFixed';

const Layout = () => {
  return (
    <div className="web-layout w3-light-gray">
      <div>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;