import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../products.json';

function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products); 
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="product-list">
        {productList.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`/products/${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
