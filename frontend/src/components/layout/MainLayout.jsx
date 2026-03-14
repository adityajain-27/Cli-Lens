import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* 
        Add padding top to account for the fixed navbar (h-[64px]). 
        The actual pages or sections might have varying padding depending on the design 
        so we provide flex-1 to push the footer down.
      */}
      <main className="flex-1 w-full mt-[64px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
