import React from 'react';
import { Outlet } from 'react-router-dom';
import IndexHeader from '../Index/IndexHeader';
import IndexFooter from '../Index/IndexFooter';

const IndexLayout = () => {
  return (
    <div className='w3-black'>
      <div>
    <IndexHeader /> 
        <Outlet />
        <IndexFooter /> 
      </div>
    </div>
  );
};

export default IndexLayout;