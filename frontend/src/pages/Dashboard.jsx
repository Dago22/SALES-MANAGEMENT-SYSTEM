import SalesChart from '../charts/SalesChart';
import TopProducts from '../charts/TopProducts';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard(){
  const [salesData, setSalesData] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  useEffect(()=>{
    api.get('/analytics/sales-trends').then(r=>setSalesData(r.data));
    api.get('/analytics/top-products').then(r=>setTopProducts(r.data));
  },[]);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      <div className='bg-white dark:bg-gray-800 p-6 rounded shadow'><h2 className='text-xl font-bold mb-4'>Sales Trends</h2><SalesChart data={salesData} /></div>
      <div className='bg-white dark:bg-gray-800 p-6 rounded shadow'><h2 className='text-xl font-bold mb-4'>Top Products</h2><TopProducts data={topProducts} /></div>
    </div>
  );
}
