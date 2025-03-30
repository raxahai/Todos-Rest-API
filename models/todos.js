const { pool } = require("../connection");

async function getTodos() {
  const { rows } = await pool.query(
    "SELECT * FROM todos WHERE deleted_at IS NULL"
  );
  return rows;
}

async function getTodosById(id) {
  const { rows } = await pool.query("SELECT * FROM todos WHERE id=$1", [id]);
  return rows[0];
}

async function addTodo(title, description) {
  const { rows } = await pool.query(
    "INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  return rows[0];
}

async function updateTodoById(id, title, description, completed) {
  const { rows } = await pool.query(
    `
    UPDATE todos 
    SET title = COALESCE(NULLIF($1, ''), title),
        description = COALESCE(NULLIF($2, ''), description),
        completed = COALESCE($3, completed)
    WHERE id = $4
    RETURNING *;
    `,
    [title, description, completed, id]
  );
  return rows[0];
}

async function deleteTodoById(id) {
  const { rows } = await pool.query(
    `UPDATE todos SET deleted_at=$2 where id=$1 RETURNING *`,
    [id, new Date()]
  );
  return rows[0];
}

module.exports = {
  getTodos,
  addTodo,
  updateTodoById,
  deleteTodoById,
  getTodosById,
};
