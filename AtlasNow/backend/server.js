const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AtaController = require('./controllers/AtaController');
const SetorController = require('./controllers/SetorController');
const FuncionarioController = require('./controllers/FuncionarioController');
const FuncionarioExternoController = require('./controllers/FuncionarioExternoController');
const AtaObserver = require('./observers/AtaObserver');
const AtaService = require('./services/AtaService');

const app = express();
app.use(cors());
app.use(bodyParser.json());

AtaService.adicionarObservador(new AtaObserver());

app.use('/atas', AtaController);
app.use('/setores', SetorController);
app.use('/funcionarios', FuncionarioController);
app.use('/funcionarios-externos', FuncionarioExternoController);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});