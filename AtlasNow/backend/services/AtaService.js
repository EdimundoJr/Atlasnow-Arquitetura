const AtaRepository = require('../repositories/AtaRepository');
const AtaSubject = require('../observers/AtaSubject');

const ataSubject = new AtaSubject();

class AtaService {
  static async cadastrarAta(topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id) {
    try {
      const result = await AtaRepository.cadastrarAta(topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id);
      
      ataSubject.notifyObservers('cadastrar', {
        topico,
        data,
        participantes,
        conteudo,
        setor_id,
        funcionario_id,
        funcionario_externo_id
      });

      return result;
    } catch (error) {
      throw new Error("Erro ao cadastrar a ata: " + error.message);
    }
  }

  static async listarAtas() {
    return await AtaRepository.listarAtas();
  }

  static async buscarAtaPorId(id) {
    return await AtaRepository.buscarAtaPorId(id);
  }

  static async editarAta(idAta, topico, data, participantes, conteudo, setor_id, funcionario_id, funcionario_externo_id) {
    try {
      const result = await AtaRepository.editarAta(idAta, topico, data, participantes,  conteudo, setor_id, funcionario_id, funcionario_externo_id);
      if (!result.affectedRows) throw new Error("Nenhuma ata foi alterada");

      // Notifica os observadores sobre a edição de uma ata
      ataSubject.notifyObservers('editar', {
        idAta,
        topico,
        data,
        participantes,
        conteudo,
        setor_id,
        funcionario_id,
        funcionario_externo_id
      });

      return result;
    } catch (error) {
      throw new Error("Erro ao editar a ata: " + error.message);
    }
  }

  static async excluirAta(idAta) {
    try {
      const result = await AtaRepository.excluirAta(idAta);
      if (!result.affectedRows) throw new Error("Nenhuma ata foi excluída");

      // Notifica os observadores sobre a exclusão de uma ata
      ataSubject.notifyObservers('excluir', { idAta });

      return result;
    } catch (error) {
      throw new Error("Erro ao excluir a ata: " + error.message);
    }
  }

  // Método para adicionar observadores
  static adicionarObservador(observer) {
    ataSubject.addObserver(observer);
  }
}

module.exports = AtaService;