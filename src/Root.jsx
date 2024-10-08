
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
export const Root = () => {
  return (
    <div className='bg-gray-900  text-gray-300 min-h-screen'>
      <Navbar />
      <div className="max-w-4xl mx-auto"> <Outlet /></div>
      <div className="absolute bottom-0 w-full"><Footer /></div>
    </div>
  )
}
