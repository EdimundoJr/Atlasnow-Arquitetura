import React, { useState } from 'react';
import AtaExcluir from './AtaExcluir';


function AtaList({ atas, onEdit, onDelete }) {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const formatarData = (dataISO) => {
    if (!dataISO) return "";
    return new Date(dataISO).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const atasFiltradas = atas.filter((ata) => {
    return (
      ata.topico.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      ata.data.includes(termoPesquisa) ||
      ata.participantes.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
  });

  return (
    <div
    style={{ width: '80%', padding: '8px', marginBottom: '16px', margin: '0 auto' }}
    >
      <h2>Lista de Atas</h2>

      <input
        type="text"
        placeholder="Pesquisar por tópico, data ou participantes..."
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', margin: '0 auto' }}
      />

      <ul>
        {atasFiltradas.map((ata) => (
          <div key={ata.idAta} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '16px' }}>
            <h3 style={{margin: '0 auto'}}>{ata.topico}</h3>
            <p>Data: {formatarData(ata.data)}</p>
            <p>Emissor: {ata.participantes}</p>
            <p>Conteúdo: {ata.conteudo}</p>
            <div style={{display: 'flex', gap: '10px'}}>
            <button onClick={() => onEdit(ata)}>Editar</button>
            <AtaExcluir idAta={ata.idAta} onDelete={onDelete} />
            </div>
            
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AtaList;