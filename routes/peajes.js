var express = require('express');
var router = express.Router();
var peajes = require("../src/repositories/peajes")

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.json(await peajes.getAll());
});

router.get("/:id",async function (req,res) {
    let peaje = await peajes.getById(req.params.id);

    if(peaje) {
        return res.json(peaje);
    }

    res.status(404).end();
})

module.exports = router;
