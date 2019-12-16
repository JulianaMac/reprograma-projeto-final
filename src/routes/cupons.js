const express = require('express');
const router = express.Router();

const controller = require("../controllers/CuponsController")

router.get('/:usuarioId', controller.getCupons)
router.post('/:usuarioId', controller.addCupom)
router.patch('/:usuarioId/cupom/:cupomId', controller.updateCupom)

module.exports = router
