const express = require("express");

const router = express.Router();

router.all("/*", (req, res, next) => {
    console.log(req.headers);
    next();
});

module.exports = router;