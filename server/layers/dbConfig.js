const mysql = require("mysql2");
const config = require("./config");

mysql.createPool({
    MYSQLDATABASE: config.MYSQLDATABASE,
    MYSQLHOST: config.MYSQLHOST,
    MYSQLPASSWORD: config.MYSQLPASSWORD,
    MYSQLPORT: config.MYSQLPORT,
    MYSQLUSER: config.MYSQLUSER,
});