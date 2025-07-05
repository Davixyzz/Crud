// config/app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar o EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para listar usuários
app.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.render('index', { users: results });
    });
});

// Rota para exibir o formulário de adicionar usuário
app.get('/add', (req, res) => {
    res.render('add');
});

// Rota para processar o formulário de adicionar usuário
app.post('/add', (req, res) => {
    const { name, senha } = req.body;
    db.query('INSERT INTO users (name, senha) VALUES (?, ?)', [name, senha], (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});

// Rota para exibir o formulário de edição
app.get('/edit/:id', (req, res) => {
    const userId = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) return res.status(500).send(err);
        res.render('edit', { user: results[0] });
    });
});

// Rota para processar o formulário de edição
app.post('/edit/:id', (req, res) => {
    const userId = req.params.id;
    const { name, senha } = req.body;
    db.query('UPDATE users SET name = ?, senha = ? WHERE id = ?', [name, senha, userId], (err) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
