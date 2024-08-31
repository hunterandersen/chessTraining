const mysql = require("mysql2");
const config = require("./config");

console.log(config);

const connection = mysql.createPool({
    database: config.MYSQLDATABASE,
    host: config.MYSQLHOST,
    password: config.MYSQLPASSWORD,
    port: config.MYSQLPORT,
    user: config.MYSQLUSER,
});

// This connection also works, simply using the URI instead
// const connection = mysql.createPool(config.RAILWAYURI);

function query(queryStr, values) {
    return new Promise((resolve, reject) => {
        connection.query(queryStr, values, (err, result) => {
            if (err) reject(err)
            else resolve(result);
        })
    });
}

module.exports = query;