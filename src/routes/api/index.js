const express = require("express");
var router = express.Router();

var v1Router = require("./v1");

router.use('/v1', v1Router);

module.exports = router;
