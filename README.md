# CRUD Node.js com MySQL

API REST simples para gerenciamento de usuários usando Node.js, Express e MySQL.

## Tecnologias usadas

- Node.js  
- Express  
- MySQL  

## Como usar

1. Configure o banco MySQL e crie a tabela `users` (veja o script SQL no projeto).  
2. Clone o repositório.  
3. Rode `npm install` para instalar dependências.  
4. Atualize os dados de conexão com o banco no arquivo `app.js`.  
5. Execute `node app.js` para iniciar o servidor.  
6. Use Postman, Insomnia ou similar para testar as rotas:  

| Método | Rota        | Descrição              |
|--------|-------------|------------------------|
| POST   | /users      | Criar um novo usuário  |
| GET    | /users      | Listar todos usuários  |
| GET    | /users/:id  | Buscar usuário por ID  |
| PUT    | /users/:id  | Atualizar usuário      |
| DELETE | /users/:id  | Apagar usuário         |

## Autor

Davi Sakai  
Email: kakashispam7@gmail.com
