const Todo = require('../models/todoSchema');

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const response = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )
        res.status(200).json({
            success: true,
            response: response,
            message: 'updated'
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            response: response,
            message: 'Internal Server Error'
        })
    }
}