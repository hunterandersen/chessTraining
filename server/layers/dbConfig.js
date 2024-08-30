const mysql = require("mysql2");
const config = require("./config");

const connection = mysql.createPool({
    MYSQLDATABASE: config.MYSQLDATABASE,
    MYSQLHOST: config.MYSQLHOST,
    MYSQLPASSWORD: config.MYSQLPASSWORD,
    MYSQLPORT: config.MYSQLPORT,
    MYSQLUSER: config.MYSQLUSER,
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