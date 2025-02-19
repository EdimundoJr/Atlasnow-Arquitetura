const connection = require('../config/database');


class SetorRepository {
  static async listarSetores() {
    const query = 'SELECT * FROM Setor';
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};
}

module.exports = SetorRepository;