const dotenv = require("dotenv");

const result = dotenv.config();

if (result.error) {
    throw new Error("Error: Could not process .env file");
}

const parsedKeys = Object.keys(result.parsed);

const requiredKeys = [
    "MYSQLDATABASE",
    "MYSQLHOST",
    "MYSQLPASSWORD",
    "MYSQLPORT",
    "MYSQLUSER",
]

if (!requiredKeys.every((key) => parsedKeys.includes(key))){
    throw new Error("Error: Missing required enviornment variable");
}

module.exports = {
    PORT: process.env.PORT
}