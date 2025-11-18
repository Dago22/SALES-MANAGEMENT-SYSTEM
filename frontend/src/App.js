import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Sales from './pages/Sales';
import ProtectedRoute from './components/ProtectedRoute';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<ProtectedRoute><Layout><Dashboard/></Layout></ProtectedRoute>} />
        <Route path='/products' element={<ProtectedRoute><Layout><Products/></Layout></ProtectedRoute>} />
        <Route path='/customers' element={<ProtectedRoute><Layout><Customers/></Layout></ProtectedRoute>} />
        <Route path='/sales' element={<ProtectedRoute><Layout><Sales/></Layout></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
