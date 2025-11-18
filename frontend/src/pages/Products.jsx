import { useEffect, useState } from 'react';
import api from '../services/api';
import ProductForm from './ProductForm';

export default function Products(){
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const load = async ()=>{ const res = await api.get('/products'); setProducts(res.data); };
  useEffect(()=>{ load(); },[]);
  const remove = async (id)=>{ await api.delete(`/products/${id}`); load(); };
  return (
    <div className='space-y-6'>
      <h2 className='text-3xl font-bold'>Products</h2>
      <ProductForm onSaved={load} editing={editing} setEditing={setEditing} />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map(p=> (
          <div key={p._id} className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
            <h3 className='text-xl font-semibold'>{p.name}</h3>
            <p className='text-gray-600 dark:text-gray-300'>Price: ${p.price}</p>
            <p className='text-gray-600 dark:text-gray-300'>Stock: {p.stock}</p>
            <div className='flex gap-2 mt-4'>
              <button onClick={()=>setEditing(p)} className='px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded'>Edit</button>
              <button onClick={()=>remove(p._id)} className='px-3 py-1 bg-red-600 text-white rounded'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
