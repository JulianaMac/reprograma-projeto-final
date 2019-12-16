const express = require('express');
const router = express.Router();

const controller = require("../controllers/CuponsController")

router.post('/:usuarioId/cupons', controller.addCupom)

module.exports = router
