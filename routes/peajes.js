var express = require('express');
var router = express.Router();
const Peaje = require('../src/repositories/peajes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({});
});

router.post('/', async function(req, res, next){
    
    if(req.body.numero == undefined){
        res.status(400).json({
            message: "NUMBER_MISSING"
        })
    }

    if(req.body.direccion == undefines){
        res.status(400).json({
            message: "DIRECTION_MISSING"
        })
    }

    try{
        await Peaje.nuevaCabina(req.body.numero, req.body.direccion)
        res.status(201).json({
            message: "SUCCESFULLY_CREATED"
        })

    }catch(e){
        console.log(e)
        res.status(500).json({
            messega: "error"
        })
    }
})

module.exports = router;