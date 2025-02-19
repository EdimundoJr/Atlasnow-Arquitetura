import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AtaEdit({ ata, onEditSuccess }) {
  const [formData, setFormData] = useState({
    ...ata,
    conteudo: ata.conteudo || "", 
  });
  const [setores, setSetores] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionariosExternos, setFuncionariosExternos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/setores/listar').then((response) => {
      setSetores(response.data);
    });

    axios.get('http://localhost:3001/funcionarios/listar').then((response) => {
      setFuncionarios(response.data);
    });

    axios.get('http://localhost:3001/funcionarios-externos/listar').then((response) => {
      setFuncionariosExternos(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.put(`http://localhost:3001/atas/editar/${formData.idAta}`, formData);
      alert('Ata editada com sucesso!');
      onEditSuccess(); 
    } catch (error) {
      console.error("Erro ao editar a ata:", error);
      alert("Erro ao editar a ata. Tente novamente.");
    }

    setIsSubmitting(false);
  };

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <input type="text" placeholder="Tópico" value={formData.topico} onChange={(e) => setFormData({ ...formData, topico: e.target.value })} />
      <input type="date" value={formData.data} onChange={(e) => setFormData({ ...formData, data: e.target.value })} />
      <input type="text" placeholder="Participantes" value={formData.participantes} onChange={(e) => setFormData({ ...formData, participantes: e.target.value })} />

      <select value={formData.setor_id} onChange={(e) => setFormData({ ...formData, setor_id: e.target.value })}>
        <option value="">Selecione um setor</option>
        {setores.map((setor) => (
          <option key={setor.id} value={setor.id}>{setor.nome}</option>
        ))}
      </select>

      <select value={formData.funcionario_id} onChange={(e) => setFormData({ ...formData, funcionario_id: e.target.value })}>
        <option value="">Selecione um funcionário</option>
        {funcionarios.map((funcionario) => (
          <option key={funcionario.id} value={funcionario.id}>{funcionario.nome}</option>
        ))}
      </select>

      <select value={formData.funcionario_externo_id} onChange={(e) => setFormData({ ...formData, funcionario_externo_id: e.target.value })}>
        <option value="">Selecione um funcionário externo</option>
        {funcionariosExternos.map((funcionarioExterno) => (
          <option key={funcionarioExterno.id} value={funcionarioExterno.id}>{funcionarioExterno.nome}</option>
        ))}
      </select>
      <textarea
        placeholder="Conteúdo da Ata"
        value={formData.conteudo || ""}
        onChange={(e) => setFormData({ ...formData, conteudo: e.target.value })}
      />

      <button type="submit" disabled={isSubmitting}>Atualizar</button>
    </form>
  );
}

export default AtaEdit;