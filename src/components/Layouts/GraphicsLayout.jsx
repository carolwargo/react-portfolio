import React from 'react';
import { Outlet } from 'react-router-dom';
import GraphicsHeader from '../Headers/GraphicsHeader';

const GraphicsLayout = () => {
  return (
    <div className="web-layout">
      <main>
        <GraphicsHeader />
        <Outlet />
      </main>
    </div>
  );
};

export default GraphicsLayout;