const Todo=require('../models/todoSchema');


exports.deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const response=await Todo.findByIdAndDelete({_id: id});
        res
        .status(200)
        .json({
            success: true,
            response,
            message: 'deleted item'
        })
    }
    catch(error){
        res
        .status(500)
        .json({
            success: false,
            response: error.message,
            message: 'internal server error'
        })
    }
}