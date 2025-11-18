import { useEffect, useState } from 'react';
import api from '../services/api';
export default function Customers(){
  const [customers,setCustomers]=useState([]);
  useEffect(()=>{ api.get('/customers').then(r=>setCustomers(r.data)); },[]);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {customers.map(c=> (<div key={c._id} className='bg-white dark:bg-gray-800 p-4 rounded shadow'><h3 className='text-xl font-bold'>{c.name}</h3><p>{c.phone}</p><p>{c.email}</p></div>))}
    </div>
  );
}
