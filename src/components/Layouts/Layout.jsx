import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
//import NavFixed from '../Navs/NavFixed';

const Layout = () => {
  return (
      <div>
        <Outlet />
        <Footer/>
      </div>

  );
};

export default Layout;