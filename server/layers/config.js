const dotenv = require("dotenv");

const result = dotenv.config();

if (result.error) {
    throw new Error("Error: Could not process .env file");
}

const parsedKeys = Object.keys(result.parsed);

const requiredKeys = [
    "PORT",
    "MYSQLDATABASE",
    "MYSQLHOST",
    "MYSQLPASSWORD",
    "MYSQLPORT",
    "MYSQLUSER",
    "RAILWAYURI"
]

if (!requiredKeys.every((key) => parsedKeys.includes(key))){
    throw new Error("Error: Missing required enviornment variable");
}

module.exports = {
    PORT: process.env.PORT,
    MYSQLDATABASE: process.env.MYSQLDATABASE,
    MYSQLHOST: process.env.MYSQLHOST,
    MYSQLPASSWORD: process.env.MYSQLPASSWORD,
    MYSQLPORT: process.env.MYSQLPORT,
    MYSQLUSER: process.env.MYSQLUSER,
    RAILWAYURI: process.env.RAILWAYURI
}