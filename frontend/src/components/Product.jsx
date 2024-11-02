import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';

function Product() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product');
        setProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='mx-auto max-w-[1240px] py-8'>
      <div className='text-center'>
        <h1 className='text-xl py-3'>Latest Products</h1>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((product) => (
          <div className='flex flex-col items-center justify-center py-3 shadow-xl' key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </Link>
            <p>${product.price}</p>
            <Rating value={product.rate} text={`${product.numberView} Reviews`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;