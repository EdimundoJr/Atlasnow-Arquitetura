const express = require('express');
const FuncionarioService = require('../services/FuncionarioService');

const router = express.Router();

router.get('/listar', async (req, res) => {
  const funcionarios = await FuncionarioService.listarFuncionarios();
  res.status(200).json(funcionarios);
});

module.exports = router;