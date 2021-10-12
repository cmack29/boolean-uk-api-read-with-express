const express = require("express");

const { createOne, getAll } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.post("/", getAll);

module.exports = router;
