const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());
//routes

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(7000, () => {
  console.log("Server has started on Port 7000");
});
