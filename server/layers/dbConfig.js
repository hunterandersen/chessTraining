const mysql = require("mysql2");
const config = require("./config");

const connection = mysql.createPool({
    database: config.MYSQLDATABASE,
    host: config.MYSQLHOST,
    password: config.MYSQLPASSWORD,
    port: config.MYSQLPORT,
    user: config.MYSQLUSER,
});

function query(queryStr, values) {
    return new Promise((resolve, reject) => {
        connection.query(queryStr, values, (err, result) => {
            if (err) reject(err)
            else resolve(result);
        })
    });
}

module.exports = query;