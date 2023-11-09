const mongoose=require('mongoose');

require('dotenv').config();

exports.dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('database successfully connected'))
    .catch((error)=>{
        console.log('database connection failure');
        console.log(error.message);
        process.exit(1);
    })
}