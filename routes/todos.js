const express = require("express");
const {
  handleGetAllTodos,
  handleAddTodo,
  handleUpdateTodoById,
  handleDeleteTodoById,
  handleGetTodosById,
} = require("../controllers/todos.js");

const router = express.Router();

router.route("/").get(handleGetAllTodos).post(handleAddTodo);

router
  .route("/:id")
  .get(handleGetTodosById)
  .patch(handleUpdateTodoById)
  .delete(handleDeleteTodoById);

module.exports = router;
