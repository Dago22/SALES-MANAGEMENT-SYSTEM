import { useState, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function Login(){
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
  const submit = async (e) => {
    e.preventDefault();
    try { const res = await api.post('/auth/login', { email, password }); login(res.data); }
    catch (e) { setErr(e.response?.data?.message || 'Error'); }
  };
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <form onSubmit={submit} className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-80 space-y-4'>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
        <input className='w-full border p-2 rounded bg-gray-50 dark:bg-gray-700' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' />
        <input className='w-full border p-2 rounded bg-gray-50 dark:bg-gray-700' type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' />
        <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>Login</button>
        {err && <p className='text-red-500 text-sm text-center'>{err}</p>}
      </form>
    </div>
  );
}
