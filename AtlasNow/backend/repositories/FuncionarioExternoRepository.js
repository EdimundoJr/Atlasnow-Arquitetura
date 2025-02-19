const connection = require('../config/database');


class FuncionarioExternoRepository {
  static async listarFuncionariosExternos() {
    const query = 'SELECT * FROM FuncionarioExterno';
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
  }
}

module.exports = FuncionarioExternoRepository;