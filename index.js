const express=require('express');
const app=express();

require('dotenv').config();

app.use(express.json());

const createTodoRoute=require('./routes/todo');
app.use('/api/v1',createTodoRoute);

app.listen(process.env.PORT,()=>{
    console.log('Server listening at port:',process.env.PORT)
})

const {dbConnect}=require('./config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send('Hello Saare Bhai nu!!')
})