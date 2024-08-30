
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
export const Root = () => {
  return (
    <div className='bg-gray-900  text-gray-300 min-h-screen py-6'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
