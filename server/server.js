const express = require("express");
const cors = require("cors");
const config = require("./layers/config.js");

const server = express();

server.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
});