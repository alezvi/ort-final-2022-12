var express = require('express');
var router = express.Router();
var employee = require('../src/repositories/employees');

router.get('/', async function (req, res, next) {
    try {
        res.json(await employee.getAll());
    } catch (e) {
        res.status(500).json({ "message": e })
    }
});

router.post('/', async function (req, res, next) {
    console.log(req.body.dni);
    if (req.body.dni == undefined) {
        return res.status(400).json({
            "message": "MISSING_DNI",
            "description": "se debe ingresar un dni",
        })
    }
    let employeeAux = await employee.exist(req.body.dni)
    console.log(employeeAux);
    if (employeeAux != null) {
        return res.status(400).json({
            "message": "EMPLOYEE_EXIST",
            "description": "El empleado ya existe",
        })
    }
    if (req.body.name == null) {
        return res.status(400).json({
            "message": "NULL_NAME",
            "description": "se debe ingresar un nombre",
        })
    }
    if (req.body.sureName == null) {
        return res.status(400).json({
            "message": "NULL_SURE_NAME",
            "description": "se debe ingresar un apellido",
        })
    }
    if (req.body.dni < 10000000 && req.body.dni > 70000000) {
        return res.status(400).json({
            "message": "INVALID_DNI",
            "description": "El dni es invalido",
        })
    }
    if (req.body.name > 50) {
        return res.status(400).json({
            "message": "NAME_TOO_LONG",
            "description": "El nombre no debe superar los 50 caracteres",
        })
    }
    if (req.body.sureName > 50) {
        return res.status(400).json({
            "message": "SURENAME_TOO_LONG",
            "description": "El apellido no debe superar los 50 caracteres",
        })
    }
    try {
        let employeeAGuardar = await employee.save(req.body.name, req.body.sureName, req.body.dni)
        res.status(201).json({ "message": employeeAGuardar });
    } catch (e) {
        res.status(404)
    }
}),

    module.exports = router;