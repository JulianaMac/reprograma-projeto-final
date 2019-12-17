const express = require('express');
const router = express.Router();

const controller = require("../controllers/CuponsController")

router.get('/:usuarioId', controller.getCupons)
router.post('/:usuarioId', controller.addCupom)
router.patch('/:usuarioId/cupom/:cupomId', controller.updateCupom)
router.get('/:usuarioId/cupom/:cupomId', controller.getCupomById)
router.delete('/:usuarioId/cupom/:cupomId', controller.removeCupom)

module.exports = router
