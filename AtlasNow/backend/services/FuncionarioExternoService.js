const FuncionarioExternoRepository = require('../repositories/FuncionarioExternoRepository');

class FuncionarioExternoService {
  static async listarFuncionariosExternos() {
    return await FuncionarioExternoRepository.listarFuncionariosExternos();
  }
}

module.exports = FuncionarioExternoService;