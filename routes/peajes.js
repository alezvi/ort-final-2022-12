var express = require('express');
var router = express.Router();
var peajes = require('../src/repositories/peajes')

/*   Listar peajes con sus correspondientes cabinas       */

router.get('/', async function (req ,res , next) {
    const listadoPeajes = await peajes.getPeajes()
    return res.json(listadoPeajes);
});

module.exports = router;