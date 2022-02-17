const mysql = require('mysql2');
require('dotenv').config()

const query = async (rawQuery) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
  }).promise();  
  await connection.connect();
    const result = await connection.execute(rawQuery);
    await connection.end();
    return result;
}

module.exports = query;