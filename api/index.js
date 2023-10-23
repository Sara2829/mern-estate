import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
})

app.listen(3000,(req,res) =>{
    console.log('Server is Listening on port 3000')
})




