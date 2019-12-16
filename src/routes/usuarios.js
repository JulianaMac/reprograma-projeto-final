const express = require('express');
const router = express.Router();

const controller = require("../controllers/UsuariosController")

router.get('', controller.getAll)
router.post('', controller.add)
router.get('/:id', controller.getById)

module.exports = router