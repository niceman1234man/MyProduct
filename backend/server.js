import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
const app =express();
const port=process.env.PORT ||5000;
app.use(cors());
app.get('/api/product',(req,res)=>{
  res.send("hello world    dgfcghjgkhl;");
})

app.listen(port,()=>{
    console.log("server running");
})