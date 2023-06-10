// import schema model
const Todo = require("../models/Todo");

// define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract title & description from request body
    const { title, description } = req.body;

    // create a new Todo Obj and insert into db
    const response = await Todo.create({ title, description });

    // send a json response with successful flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
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
