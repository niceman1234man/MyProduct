import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

function ProductScreen() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/${productId}`); 
        setProduct(response.data); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!product) {
    return <p>No item exists</p>;
  }

  return (
    <div className='max-w-[1240px] mx-auto flex-col my-3'>
      <Link onClick={() => navigate(-1)} className='bg-cyan-400 mx-auto text-center mb-5 p-2'>Go Back</Link>
      <div className='flex'>
        <div className='bg-gray-600 p-2 mt-4'>
          <img 
            src={product.image} 
            alt={product.name} 
          />
        </div>
        <div className='ml-5'>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
        <div className='shadow-2xl p-8 mx-auto'>
          <p className='p-2'>Price: ${product.price}</p>
          <p className='p-2'>Status: {product.status}</p>
          <button className='p-2 bg-green-400'>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;