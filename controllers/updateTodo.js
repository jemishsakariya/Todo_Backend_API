// import schema model
const Todo = require("../models/Todo");

// define route handler
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatetodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    );

    // send a json response with successful flag
    res.status(200).json({
      success: true,
      data: updatetodo,
      message: "Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
