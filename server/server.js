const express = require("express");
const cors = require("cors");
const config = require("./layers/config.js");
const query = require("./layers/dbConfig.js");
const authorizeRouter = require("./layers/authorize.js");

const server = express();

server.use(cors());
server.use("/", authorizeRouter);

server.get("/", (req, res) => {
    //HTTP Method
    console.log(req.method);
    //URL endpoint
    console.log(req.url);
    //Query parameters
    console.log(req.query);
    res.end("Tested");
})


server.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
});