import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config();

const port = process.env.PORT || 5000;
connectDB(); // connect to DB

const app = express();

app.get('/',(req,res)=>{
    res.send('api is running.....') 
})

app.use('/api/products', productRoutes);

app.listen(port, ()=>{console.log(`Server running on ${port}`)})