const Todo=require('../models/todoSchema');

exports.createTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response=await Todo.create({title,description});
        res
        .status(200)
        .json({
            success: true,
            response: response,
            message: 'Entry Successfully Created'
        })
    }
    catch(error){
        res
        .status(500)
        .json({
            success: false,
            response: 'Internal Server Error',
            message: error.message
        })
    }
}