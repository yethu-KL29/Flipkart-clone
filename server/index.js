import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const URL = process.env.URL;
await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Database connected');
})
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
)
