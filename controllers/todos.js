const {
  getTodos,
  addTodo,
  updateTodoById,
  deleteTodoById,
  getTodosById,
} = require("../models/todos");

async function handleGetAllTodos(req, res, next) {
  const result = await getTodos();
  res.json({ todos: result });
}

async function handleGetTodosById(req, res, next) {
  const id = req.params.id;
  const result = await getTodosById(id);
  res.json(result);
}

async function handleAddTodo(req, res, next) {
  const body = req.body;
  const result = await addTodo(body.title, body.description);
  res.json(result);
}

async function handleUpdateTodoById(req, res, next) {
  const id = req.params.id;
  const body = req.body;
  const result = await updateTodoById(
    id,
    body.title,
    body.description,
    body.completed
  );
  res.json(result);
}

async function handleDeleteTodoById(req, res, next) {
  const id = req.params.id;
  const result = await deleteTodoById(id);
  res.json(result);
}

module.exports = {
  handleGetAllTodos,
  handleAddTodo,
  handleUpdateTodoById,
  handleDeleteTodoById,
  handleGetTodosById,
};
