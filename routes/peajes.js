var express = require('express');
var router = express.Router();
var peajes = require("../src/repositories/peajes")

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.json(await peajes.getAll());
});

module.exports = router;
