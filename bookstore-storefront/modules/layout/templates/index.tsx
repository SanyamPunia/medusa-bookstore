import React, { FC } from 'react';
import Footer from '@modules/layout/templates/footer';
import Nav from '@modules/layout/templates/nav';

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
