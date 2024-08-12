const mysql = require('mysql2/promise'); // Import mysql2 with promise support
require('dotenv').config(); // Load environment variables from .env file

// Create a MySQL connection pool using the provided credentials
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Export the promise-based connection pool
module.exports = pool;
