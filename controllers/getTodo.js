const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    // fetch all todo item from database
    const todos = await Todo.find();

    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo data Successfully fetched",
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

exports.getTodoById = async (req, res) => {
  try {
    // extract todo item basis on id
    const id = req.params.id;

    // _id is in your Mongodb database and id is you get from parameter(path)
    // set _id = id
    const todo = await Todo.findById({ _id: id });

    // data for given id is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found With Given Id",
      });
    }

    // data gor given id is found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data Successfully fetched`,
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
