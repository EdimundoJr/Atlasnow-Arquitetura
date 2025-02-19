class AtaObserver {
  update(evento, ata) {
    switch (evento) {
      case 'cadastrar':
        console.log(`Nova ata cadastrada: ${ata.topico}`);
        break;
      case 'editar':
        console.log(`Ata editada: ${ata.topico}`);
        break;
      case 'excluir':
        console.log(`Ata excluída: ID ${ata.idAta}`);
        break;
      default:
        console.log(`Evento desconhecido: ${evento}`);
    }
  }
}

module.exports = AtaObserver;