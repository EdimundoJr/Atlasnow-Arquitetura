import React, { useState } from 'react';
import axios from 'axios';


function AtaForm({ onCadastroSuccess }) {
  const [ata, setAta] = useState({
    topico: '',
    data: '',
    participantes: '',
    conteudo: '',
    setor_id: '',
    funcionario_id: '',
    funcionario_externo_id: ''
  });

  const [setores, setSetores] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionariosExternos, setFuncionariosExternos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Carregar setores, funcionários e funcionários externos
  React.useEffect(() => {
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
      await axios.post('http://localhost:3001/atas/cadastrar', ata);
      alert('Ata cadastrada com sucesso!');
      onCadastroSuccess(); // Notifica o componente pai para atualizar a lista de atas
      setAta({ // Limpa o formulário após o cadastro
        topico: '',
        data: '',
        participantes: '',
        conteudo: '',
        setor_id: '',
        funcionario_id: '',
        funcionario_externo_id: ''
      });
    } catch (error) {
      console.error("Erro ao cadastrar a ata:", error);
      alert("Erro ao cadastrar a ata. Tente novamente.");
    }

    setIsSubmitting(false);
  };

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <input type="text" placeholder="Tópico" value={ata.topico} onChange={(e) => setAta({ ...ata, topico: e.target.value })}  />
      <input type="date" value={ata.data} onChange={(e) => setAta({ ...ata, data: e.target.value })} />
      <input type="text" placeholder="Emissor" value={ata.participantes} onChange={(e) => setAta({ ...ata, participantes: e.target.value })} />

      <select value={ata.setor_id} onChange={(e) => setAta({ ...ata, setor_id: e.target.value })} >
        <option value="">Selecione um setor</option>
        {setores.map((setor) => (
          <option key={setor.id} value={setor.id}>{setor.nome}</option>
        ))}
      </select>

      <select value={ata.funcionario_id} onChange={(e) => setAta({ ...ata, funcionario_id: e.target.value })} >
        <option value="">Selecione um funcionário</option>
        {funcionarios.map((funcionario) => (
          <option key={funcionario.id} value={funcionario.id}>{funcionario.nome}</option>
        ))}
      </select>

      <select value={ata.funcionario_externo_id} onChange={(e) => setAta({ ...ata, funcionario_externo_id: e.target.value })} >
        <option value="">Selecione um funcionário externo</option>
        {funcionariosExternos.map((funcionarioExterno) => (
          <option key={funcionarioExterno.id} value={funcionarioExterno.id}>{funcionarioExterno.nome}</option>
        ))}
      </select>
      <textarea
        placeholder="Conteúdo da Ata"
        value={ata.conteudo}
        onChange={(e) => setAta({ ...ata, conteudo: e.target.value })}
      />
      <button  type="submit" disabled={isSubmitting}>Cadastrar</button>
    </form>
  );
}

export default AtaForm;