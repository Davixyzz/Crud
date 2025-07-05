// src/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Substitua pelo seu usuário do MySQL
    password: '', // Substitua pela sua senha do MySQL
    database: 'node'      // O nome do banco de dados
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados!');
});

module.exports = connection;
