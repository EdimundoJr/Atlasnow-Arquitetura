const connection = require('../config/database');


class FuncionarioRepository {
  static async listarFuncionarios() {
    const query = 'SELECT * FROM Funcionario';
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
  }
}

module.exports = FuncionarioRepository;