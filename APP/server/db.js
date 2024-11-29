const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

console.log({
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
  });

// Connect to MySQL
db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err.message);
    } else {
      console.log('Connected to the MySQL database');
    }
});

module.exports = db;
