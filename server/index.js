const  express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config();

app.use("/", userRouter);
app.use('/product',productRouter);


const URL = process.env.URL;
mongoose.set("strictQuery", false);
 mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Database connected');
})
const port = 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
)
