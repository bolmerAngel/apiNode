const express = require('express');
const router = express.Router();

const empleado = require('../controlador/empleado.controlador');

router.get('/', empleado.getEmpleados)
router.post('/', empleado.crearEmpleado)
router.get('/:_id', empleado.getEmpledo)
router.put('/:_id', empleado.editarEmpleado)
router.delete('/:_id', empleado.deleteEmpleado)

module.exports = router;