const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletetodo = await Todo.findByIdAndDelete({ _id: id });

    // send a json response with successful flag
    res.status(200).json({
      success: true,
      data: deletetodo,
      message: "Deleted Successfully",
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
