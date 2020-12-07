const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

const TodoModel = require("./models/Todo.js");
const Todo = require("./models/Todo.js");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/add", (req, res) => {
  const newTodo = req.body.newTodo;
  const todo = new TodoModel({ title: newTodo });

  try {
    todo.save();
    res.send("Inserted");
  } catch (error) {
    console.log(err);
  }
});

app.get("/read", (req, res) => {
  TodoModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.put("/update", async (req, res) => {
  const newTodo = req.body.newTodo;
  const id = req.body.id;

  try {
    await TodoModel.findById(id, (err, todo) => {
      todo.title = newTodo;
      todo.save();
      res.send("update");
    });
  } catch (error) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await TodoModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(port, () => {
  console.log("listning on port: " + port);
});
