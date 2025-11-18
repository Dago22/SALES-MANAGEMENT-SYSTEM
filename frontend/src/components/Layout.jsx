import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Layout({ children }){
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <div className='flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      <aside className='hidden md:flex w-64 bg-white dark:bg-gray-800 shadow-lg flex-col p-4'>
        <h1 className='text-2xl font-bold mb-6'>Sales System</h1>
        <nav className='flex flex-col gap-4'>
          <Link to='/'>Dashboard</Link>
          <Link to='/products'>Products</Link>
          <Link to='/customers'>Customers</Link>
          <Link to='/sales'>Sales</Link>
        </nav>
        <div className='mt-auto'> 
          <button onClick={()=>setDark(!dark)} className='mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded'>{dark ? 'Light' : 'Dark'}</button>
        </div>
      </aside>
      <main className='flex-1 p-6'>{children}</main>
    </div>
  );
}
