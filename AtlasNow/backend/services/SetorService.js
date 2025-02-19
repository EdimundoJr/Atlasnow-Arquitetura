const SetorRepository = require('../repositories/SetorRepository');

class SetorService {
  static async listarSetores() {
    return await SetorRepository.listarSetores();
  }
}

module.exports = SetorService;