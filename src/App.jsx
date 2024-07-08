import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

import { Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
     <div>
      <nav>
        <ul>
          <li>
            <Link to="/register">Registro</Link>
            <Link to="/login">Login</Link>
            <Link to="/home">Home</Link>
            <Link to="/products/1">Products</Link>
          </li>
        </ul>
      </nav>
      <h1>Pagina Principal</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
