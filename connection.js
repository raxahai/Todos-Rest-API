const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // Database username
  host: "localhost", // Database host
  database: "todos", // Database name
  password: "admin", // Database password
  port: 5432, // Default PostgreSQL port
});

async function connectDb(url) {
  await pool.connect();
}

module.exports = {
  connectDb,
  pool,
};
