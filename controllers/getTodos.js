const Todo=require('../models/todoSchema');

exports.getTodos=async(req,res)=>{
    try{
        const response=await Todo.find({});
        res
        .status(200)
        .json({
            success: true,
            response: response,
            message: 'All data'
        })
    }
    catch(error){
        res
        .status(500)
        .json({
            success: false,
            response: 'error',
            message: error.message
        })
    }
}