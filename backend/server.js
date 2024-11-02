import express from 'express';
import products from './data/Product.js';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
const app =express();
const port=process.env.PORT ||5000;
app.use(express.json());
app.use(cors());
app.get('/api/product',(req,res)=>{
 res.json(products);
})
app.get('/api/product/:id',(req,res)=>{
  const pro=products.find((p)=>p._id==req.params.id)
  res.json(pro);
})
app.listen(port,()=>{
    console.log("server running");
})