import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Products from '../Product'; // Ensure Products is an array of product objects

function ProductScreen() {
    const navigate = useNavigate();
    const { id: productId } = useParams();
    console.log('Product ID:', productId); // Debugging line
  const pro= Products.find((p)=>p._id==productId);
    console.log("Pro",pro)// Ensure comparison is correct
     
    return (
        <div style={{ padding: '20px' }}>
            <Link onClick={() => navigate(-1)}>Go Back</Link>
            {pro ? (
                <div>
                    <img 
                        src={pro.image} 
                        alt={pro.name} 
                       
                    />
                    <h2>{pro.name}</h2>
                    <p>{pro.description}</p>
                </div>
            ) : (
                <p>No item exists</p>
            )}
        </div>
    );
}

export default ProductScreen;