const express = require('express');
const FuncionarioExternoService = require('../services/FuncionarioExternoService');

const router = express.Router();

router.get('/listar', async (req, res) => {
  const funcionariosExternos = await FuncionarioExternoService.listarFuncionariosExternos();
  res.status(200).json(funcionariosExternos);
});

module.exports = router;