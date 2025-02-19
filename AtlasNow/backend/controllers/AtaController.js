const express = require('express');
const AtaService = require('../services/AtaService');

const router = express.Router();

router.post('/cadastrar', async (req, res) => {
  const { topico, data, participantes,conteudo, setor_id, funcionario_id, funcionario_externo_id } = req.body;
  const result = await AtaService.cadastrarAta(topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id);
  res.status(200).json(result);
});

router.get('/listar', async (req, res) => {
  const atas = await AtaService.listarAtas();
  res.status(200).json(atas);
});

router.put('/editar/:id', async (req, res) => {
  const { id } = req.params;
  const { topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id } = req.body;
  const result = await AtaService.editarAta(id, topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id);
  res.status(200).json(result);
});

router.get('/buscar/:id', async (req, res) => {
  const { id } = req.params;
  const ata = await AtaService.buscarAtaPorId(id);
  res.status(200).json(ata);
});

router.delete('/excluir/:idAta', async (req, res) => {
  const { idAta } = req.params;

  if (!idAta) {
    return res.status(400).json({ error: "ID da ata não fornecido." });
  }

  try {
    const result = await AtaService.excluirAta(idAta);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;