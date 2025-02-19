# Guia de Instalação e Execução do Sistema AtlasNow

## 1. Configuração do Banco de Dados
Antes de iniciar o sistema, é necessário configurar o banco de dados. Siga os passos abaixo:

1. Execute o script **`ATLANOW-BD.sql`** no MySQL para criar o banco de dados.
2. Configure o arquivo **`config/database.js`** no backend com as credenciais do seu MySQL. Exemplo:

```javascript
module.exports = {
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'atlasnow'
};
```

> **Importante:** Substitua essas credenciais pelas configurações do seu ambiente local onde o banco foi criado.

---
## 2. Instalação das Dependências
Agora, instale as dependências do projeto para backend e frontend.

1. No diretório do **backend**, execute:
   ```sh
   npm install
   ```
2. No diretório do **frontend**, execute:
   ```sh
   npm install
   ```

---
## 3. Inicialização do Servidor
Com todas as dependências instaladas, inicie os servidores do backend e frontend.

### Backend:
Na pasta do **backend**, execute:
```sh
node server.js
```

### Frontend:
Na pasta do **frontend**, execute:
```sh
npm start
```

Agora o sistema estará pronto para uso! 🚀

---
## 4. Vídeo de Demonstração
Assista ao vídeo de demonstração do sistema no link abaixo:
[Vídeo de Demonstração](https://drive.google.com/file/d/1Jeih64wgrS9qohUVJaLJRT-Iy9NCTgLB/view?usp=sharing)

