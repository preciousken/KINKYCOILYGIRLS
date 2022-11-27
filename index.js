const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('mongoose');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const productRouter = require('./routes/product')
const cookieParser = require('cookie-parser')


require('dotenv').config()
const app = express();

const connectDB = async () =>{
  try {
    await connect(process.env.DATABASE_URL);
    console.log('connected to the database')
  } catch (error) {
    throw error;
  }
}


// middlewares
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/product',productRouter)

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
  })
})




const port = process.env.PORT || 8800;
app.listen(port,()=>{
  connectDB()
  console.log(`
Connection established successfully 
App listening on port ${port}`)
})

















// const { config } = require('dotenv');
// config();
// const express = require('express')

// const app = express();

// const PORT = Number(process.env.PORT) || 2500;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.raw());
// app.use(require('cors')());


// require('./databases/kinkycoilygirls');

// app.listen(PORT, () => {
//   console.log(`
// Connection has been established successfully.
// App is listening on port ${PORT}...
// http://localhost:${PORT}`);
// });

// const index = require('./routes/index');
// index(app);

// // 404 Error Handler
// app.all('*', (req, res) => {
//   res.status(404).json({
//     status: false,
//     error: 'And Just Like That, You Completely Lost Your Way 😥',
//   });
// });
























// const { config } = require('dotenv');
// config();
// // const express, { Application, Request, Response } = require('express');
// const express = require('express')

// const app = express();

// const PORT = Number(process.env.PORT) || 2500;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.raw());
// app.use(require('cors')());

// require('./databases/kinkycoilygirls');

// app.listen(PORT, () => {
//   console.log(`
// Connection has been established successfully.
// App is listening on port ${PORT}...
// http://localhost:${PORT}`);
// });

// const index = require('./routes/index');
// index(app);

// // 404 Error Handler
// app.all('*', (req, res) => {
//   res.status(404).json({
//     status: false,
//     error: 'And Just Like That, You Completely Lost Your Way 😥',
//   });
// });
