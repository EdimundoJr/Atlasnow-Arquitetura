DROP DATABASE IF EXISTS atlasnow;
CREATE DATABASE atlasnow;
USE Atlasnow;
-- Tabela de Setores
CREATE TABLE Setor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

-- Tabela de Funcionários
CREATE TABLE Funcionario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cargo VARCHAR(255) NOT NULL,
  setor_id INT,
  FOREIGN KEY (setor_id) REFERENCES Setor(id)
);

-- Tabela de Funcionários Externos
CREATE TABLE FuncionarioExterno (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  empresa VARCHAR(255) NOT NULL
);

-- Tabela de Atas
CREATE TABLE Ata (
  id INT AUTO_INCREMENT PRIMARY KEY,
  topico VARCHAR(255) NOT NULL,
  data DATE NOT NULL,
  participantes VARCHAR(255) NOT NULL,
  conteudo TEXT NOT NULL,
  setor_id INT,
  funcionario_id INT,
  funcionario_externo_id INT,
  FOREIGN KEY (setor_id) REFERENCES Setor(id),
  FOREIGN KEY (funcionario_id) REFERENCES Funcionario(id),
  FOREIGN KEY (funcionario_externo_id) REFERENCES FuncionarioExterno(id)
);

-- Inserir Setores
INSERT INTO Setor (nome) VALUES
('Recursos Humanos'),
('Financeiro'),
('Tecnologia da Informação'),
('Marketing');

-- Inserir Funcionários
INSERT INTO Funcionario (nome, cargo, setor_id) VALUES
('João Silva', 'Analista de RH', 1),
('Maria Oliveira', 'Contador', 2),
('Carlos Souza', 'Desenvolvedor', 3),
('Ana Costa', 'Gerente de Marketing', 4);

-- Inserir Funcionários Externos
INSERT INTO FuncionarioExterno (nome, empresa) VALUES
('Pedro Santos', 'Consultoria XYZ'),
('Fernanda Lima', 'Empresa ABC'),
('Ricardo Almeida', 'Tech Solutions');

-- Inserir Atas (opcional, para testes)
INSERT INTO Ata (topico, data, participantes, setor_id, funcionario_id, funcionario_externo_id, conteudo) VALUES
('Reunião de Planejamento', '2024-01-15', 'Edimundo', 1, 1, 1, 'Conteúdo detalhado da reunião de planejamento.'),
('Reunião Financeira', '2024-01-20', 'Felipe', 2, 2, 2, 'Conteúdo detalhado da reunião financeira.');