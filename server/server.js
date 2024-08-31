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
});

server.get("/dbTest", async (req, res) => {
    try {
        const result = await query("SELECT * FROM positions");
        res.json(result);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
})

server.get("/updateDB", async (req, res) => {
    //const tempCommand = "CREATE TABLE positions (id SERIAL PRIMARY KEY, fen VARCHAR(255) UNIQUE, evalCP INT, INDEX (evalCP));";

    try {
        const result = await query(tempCommand);

        res.json(result);
    } catch(err) {
        console.log(err);
        res.json(err);
    }
});

server.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
});