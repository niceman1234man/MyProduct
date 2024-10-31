import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Products from '../Product'; // Ensure Products is an array of product objects

function ProductScreen() {
    const navigate = useNavigate();
    const { id: productId } = useParams();
  const pro= Products.find((p)=>p._id==productId);  
    return (
        <div className='max-w-[1240px] mx-auto flex-col my-3' >
            <Link onClick={() => navigate(-1)} className=' bg-cyan-400 mx-auto text-center mb-5 p-2'>Go Back</Link>
            {pro ? (
                <div className='flex '>
                    <div className='bg-gray-600 p-2 mt-4'>
                    <img 
                        src={pro.image} 
                        alt={pro.name} 
                       
                    />
                    </div>
                    <div className='ml-5'>
                    <h2>{pro.name}</h2>
                    <p>${pro.price}</p>
                    <p>{pro.description}</p>
                    </div>
                    
                   <div  className='shadow-2xl p-8 mx-auto'>
                   <p className='p-2'>Price: ${pro.price}</p>
                   <p className='p-2'>Status: {pro.status}</p>
                   <button  className='p-2 bg-green-400'>Add to cart</button>

                   </div>
                </div>
            ) : (
                <p>No item exists</p>
            )}
        </div>
    );
}

export default ProductScreen; 