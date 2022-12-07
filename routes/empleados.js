var express = require("express");
var router = express.Router();
var empleados = require("../src/repositories/empleados");

/* POST */
router.post("/", async function (req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({
      message: "MISSING_NAME",
      description: "Falta el nombre",
    });
  }

  if (req.body.name.length < 2 || req.body.name.length > 50) {
    return res.status(400).json({
      message: "INVALID_NAME",
      description: "El nombre debe tener entre 2 o 50 caracteres",
    });
  }

  if (!req.body.lastname) {
    return res.status(400).json({
      message: "MISSING_LASTNAME",
      description: "Falta el apellido",
    });
  }

  if (req.body.lastname.length < 2 || req.body.lastname.length > 50) {
    return res.status(400).json({
      message: "INVALID_LASTNAME",
      description: "El apellido debe tener entre 2 o 50 caracteres",
    });
  }

  if (!req.body.dni) {
    return res.status(400).json({
      message: "MISSING_DNI",
      description: "Falta el DNI",
    });
  }

  if (req.body.dni < 10000000 || req.body.dni > 70000000) {
    return res.status(400).json({
      message: "INVALID_DNI",
      description: "El DNI debe ser un número entre 10000000 y 70000000",
    });
  }

  try {
    await empleados.save(
      req.body.name,
      req.body.lastname,
      req.body.dni,
      req.body.fechaIngreso,
      req.body.peajeId
    );
    res.status(201).json();
  } catch (e) {
    console.log(e);
    res.status(500).json();
  }
});

/* GET */

router.get("/", async function (req, res, next) {
  if (req.query) {
    res.json(await empleados.getByQueryString(req.query));
  } else {
    res.status(404).end();
  }
});

module.exports = router;
