
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
export const Root = () => {
  return (
    <div className='bg-gray-900 min-h-screen text-gray-300'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
