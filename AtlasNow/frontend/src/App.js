import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AtaForm from './components/AtaForm';
import AtaList from './components/AtaList';
import AtaEdit from './components/AtaEdit';

function App() {
  const [atas, setAtas] = useState([]);
  const [ataEditando, setAtaEditando] = useState(null);

  // Carregar atas ao iniciar
  useEffect(() => {
    carregarAtas();
  }, []);

  const carregarAtas = async () => {
    const response = await axios.get('http://localhost:3001/atas/listar');
    setAtas(response.data);
  };

  const handleCadastroSuccess = () => {
    carregarAtas();
  };

  const handleEdit = (ata) => {
    setAtaEditando(ata);
  };

  const handleEditSuccess = () => {
    setAtaEditando(null);
    carregarAtas();
  };

  const handleDelete = () => {
    carregarAtas();
  };

  return (
    <div style={{ width: '80%', padding: '8px', marginBottom: '16px', margin: '0 auto' }}>
      <h1>Atlasnow - Gerenciamento de Atas</h1>
      {ataEditando ? (
        <AtaEdit ata={ataEditando} onEditSuccess={handleEditSuccess} />
      ) : (
        <>
      <AtaForm onCadastroSuccess={handleCadastroSuccess} />
        </>
      )}
      <AtaList atas={atas} onEdit={handleEdit} onDelete={handleDelete} />

    </div>
  );
}

export default App;