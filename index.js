const express = require("express");
const app = express();

// This is used for accessing the .env file config
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// we are not using this we use another method
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// middleware to parse json request body
app.use(express.json());

// import router for TODO API
const todoRoutes = require("./routes/todoRoutes");
// mount the todo API routes
// "http://localhost:3000/api/v1/"createtodo"" path
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server are listing on PORT no. ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/", (req, res) => {
  res.send("<h1>This is my HomePage</h1>");
});
