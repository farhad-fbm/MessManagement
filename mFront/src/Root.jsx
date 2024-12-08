
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar_footer/Navbar';
import { Footer } from './components/navbar_footer/Footer';
import { useState } from 'react';
export const Root = () => {


  return (
    <div className=''>
      <Navbar />
      <div className="max-w-4xl mx-auto"> <Outlet /></div>
      {/* <div className="absolute bottom-0 w-full"><Footer /></div> */}
    </div>
  )
}
