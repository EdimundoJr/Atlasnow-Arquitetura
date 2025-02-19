const express = require('express');
const SetorService = require('../services/SetorService');

const router = express.Router();

router.get('/listar', async (req, res) => {
  const setores = await SetorService.listarSetores();
  res.status(200).json(setores);
});

module.exports = router;