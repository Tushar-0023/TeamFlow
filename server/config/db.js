const mysql = require("mysql2/promise");
require("dotenv").config();

// CREATE POOL (PROMISE BASED - CLEAN & MODERN)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// TEST CONNECTION (SAFE VERSION)
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL Connected Successfully");
    connection.release();
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);
  }
};

testConnection();

module.exports = pool;