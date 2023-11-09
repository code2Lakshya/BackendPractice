const Todo=require('../models/todoSchema');

exports.getTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Todo.findById({ _id: id });
        if (response) {
            res
                .status(200)
                .json({
                    success: true,
                    data: response,
                    message: 'Item Found'
                })
        }
        else {
            res
                .status(404)
                .json({
                    success: false,
                    data: response,
                    message: 'No data found'
                })
        }
    }
    catch (error) {
        res
            .status(500)
            .json({
                success: false,
                data: error.message,
                message: 'Internal Server Error'
            })
    }
}