const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "test",
    port: 3300
});

module.exports = db