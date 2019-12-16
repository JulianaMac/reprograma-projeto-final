const express = require('express');
const router = express.Router();

const controller = require("../controllers/CuponsController")

router.post('/:usuarioId', controller.addCupom)
router.get('/:usuarioId', controller.getCupons)

module.exports = router
