const connection = require('../config/database');


class AtaRepository {
  static async cadastrarAta(topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id) {
    const query = 'INSERT INTO Ata (topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
    connection.query(query, [topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id], (err, results) => {
      if (err) reject(err);
      resolve({ message: 'Ata cadastrada com sucesso!' });
  });

  })}


  static async listarAtas() {
    const query = 'SELECT * FROM Ata';
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
      }
    )}

  static async buscarAtaPorId(id) {
    const query = 'SELECT * FROM Ata WHERE id = ?';
    const [rows] = await connection.execute(query, [id]);
    return rows[0]; 
  }

  static async editarAta(idAta, topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id) {
    const query = 'UPDATE Ata SET topico = ?, data = ?, participantes = ?, conteudo = ?, setor_id = ?, funcionario_id = ?, funcionario_externo_id = ? WHERE idAta = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id, idAta], (err, results) => {
        if (err) return reject(err);
        if (!results.affectedRows) return reject(new Error("Nenhuma ata foi alterada"));
        resolve({ message: 'Ata atualizada com sucesso!', affectedRows: results.affectedRows });
      });
    });
  }
    
  static async excluirAta(idAta) {
    const query = 'DELETE FROM Ata WHERE idAta = ?';
    
    return new Promise((resolve, reject) => {
      if (!idAta) {
        return reject(new Error("ID da ata não pode ser indefinido ou nulo."));
      }
  
      connection.query(query, [parseInt(idAta)], (err, results) => {
        if (err) return reject(err);
        if (!results.affectedRows) return reject(new Error("Nenhuma ata foi excluída."));
        resolve({ message: "Ata excluída com sucesso!", affectedRows: results.affectedRows });
      });
    });
  }
    
    
}

module.exports = AtaRepository;