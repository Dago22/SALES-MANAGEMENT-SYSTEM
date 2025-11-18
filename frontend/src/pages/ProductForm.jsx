import { useEffect, useState } from 'react';
import api from '../services/api';

export default function ProductForm({ onSaved, editing, setEditing }){
  const [name,setName]=useState('');
  const [price,setPrice]=useState(0);
  const [stock,setStock]=useState(0);
  useEffect(()=>{ if(editing){ setName(editing.name); setPrice(editing.price); setStock(editing.stock); } },[editing]);
  const submit=async(e)=>{ e.preventDefault(); if(editing){ await api.put(`/products/${editing._id}`, {name, price, stock}); setEditing(null);} else { await api.post('/products', {name, price, stock}); } setName(''); setPrice(0); setStock(0); onSaved(); };
  return (
    <form onSubmit={submit} className='bg-white dark:bg-gray-800 p-4 rounded shadow max-w-md space-y-3'>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder='name' className='w-full p-2 rounded bg-gray-50 dark:bg-gray-700' />
      <input value={price} onChange={e=>setPrice(Number(e.target.value))} placeholder='price' type='number' className='w-full p-2 rounded bg-gray-50 dark:bg-gray-700' />
      <input value={stock} onChange={e=>setStock(Number(e.target.value))} placeholder='stock' type='number' className='w-full p-2 rounded bg-gray-50 dark:bg-gray-700' />
      <button className='px-4 py-2 bg-blue-600 text-white rounded w-full'>{editing? 'Update' : 'Add'}</button>
    </form>
  );
}
