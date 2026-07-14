const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,

  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,

  ssl: {
    minVersion: "TLSv1.2",
  },

  connectTimeout: 20000,
});


const testConnection = async () => {
  try {
    const connection = await pool.getConnection();

    await connection.query("SELECT 1");

    console.log("✅ TiDB Connected Successfully");

    connection.release();

  } catch (error) {
    console.error("❌ TiDB Connection Failed");
    console.error(error.message);
  }
};


testConnection();

module.exports = pool;