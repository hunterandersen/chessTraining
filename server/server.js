const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const config = require("./layers/config.js");

const server = express();

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});