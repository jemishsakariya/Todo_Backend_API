const express = require("express");
const router = express.Router();

// import controller instance
const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// define API routes
router.post("/createtodo", createTodo);
router.get("/gettodos", getTodos);
router.get("/gettodos/:id", getTodoById);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;
