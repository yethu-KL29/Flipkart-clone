const  express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const productRouter = require('./routers/productRouter');

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config();
app.use('/',productRouter);


const URL = process.env.URL;
 mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Database connected');
})
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
)
