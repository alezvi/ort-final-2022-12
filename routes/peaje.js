var express = require('express');
var router = express.Router();
var peajes = require('../src/repositories/peaje')

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.json(await peajes.getPeajes());
});

router.get('/:id', async function(req, res){
  res.json(await peajes.getPeajesById(req.params.id));
})


module.exports = router;
