import React from 'react';
import axios from 'axios';

function AtaExcluir({ idAta, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja excluir esta ata?")) {
      try {
        await axios.delete(`http://localhost:3001/atas/excluir/${idAta}`);
        alert("Ata excluída com sucesso!");
        onDelete(); 
      } catch (error) {
        console.error("Erro ao excluir a ata:", error);
        alert("Erro ao excluir a ata.");
      }
    }
  };

  return (
    <button onClick={handleDelete}>Excluir</button>
  );
}

export default AtaExcluir;