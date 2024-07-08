// ProductsDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products.json';

function ProductsDetails() {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    
    const foundProduct = products.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div>Cargando producto</div>; 
  }

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default ProductsDetails;
