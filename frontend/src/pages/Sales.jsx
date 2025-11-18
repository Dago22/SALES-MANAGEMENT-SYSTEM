import { useEffect, useState } from 'react';
import api from '../services/api';
export default function Sales(){
  const [sales, setSales] = useState([]);
  useEffect(()=>{ api.get('/sales').then(r=>setSales(r.data)); },[]);
  return (
    <div>
      <h2 className='text-3xl font-bold mb-4'>Sales</h2>
      <div className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
        <table className='w-full'>
          <thead><tr><th>Date</th><th>Customer</th><th>Total</th></tr></thead>
          <tbody>
            {sales.map(s=> <tr key={s._id}><td>{new Date(s.date).toLocaleString()}</td><td>{s.customer?.name}</td><td>{s.total}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
