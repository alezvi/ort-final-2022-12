const { Router } = require("express");

const {
    getTarifas
} = require("../src/controllers/tarifaController");

const router = Router();

router.get("/", getTarifas);
module.exports = router;
