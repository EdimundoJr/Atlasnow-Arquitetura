const FuncionarioRepository = require('../repositories/FuncionarioRepository');

class FuncionarioService {
  static async listarFuncionarios() {
    return await FuncionarioRepository.listarFuncionarios();
  }
}

module.exports = FuncionarioService;