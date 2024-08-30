const express = require("express");
const cors = require("cors");
const config = require("./layers/config.js");
const query = require("./layers/dbConfig.js");

const server = express();

server.use(cors());


server.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
});