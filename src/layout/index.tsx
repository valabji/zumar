import React, { ReactElement } from 'react';
import Footer from './footer';
import Header from './header';
import { Outlet } from 'react-router-dom';

export default function layout(): ReactElement {
  return (
    <div className="full-height">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
