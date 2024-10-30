import React from 'react'
import { useNavigate,Link,useParams } from 'react-router-dom'
import Product from '../Product';


function ProductScreen() {

    const navigate=useNavigate();
    const {id:productId}=useParams();
    const pro=Product.find((p)=>p._id==productId);
  return (
    <div>
   
<Link to={navigate(-1)}>Go Back</Link>
{pro ? 
<div>
<img src={Product.image} alt="" />
<p>{Product.name}</p>
<p>{Product.description}</p>
</div> : <p>No item exist</p>

}
    </div>
  )
}

export default ProductScreen