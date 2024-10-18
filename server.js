const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // seu usuário MySQL
    password: '', // sua senha, se houver
    database: 'Gerenciamento_de_tarefas'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Criar várias tarefas
app.post('/tarefas/bulk', (req, res) => {
    const tarefas = req.body; // Espera um array de tarefas
    const sql = 'INSERT INTO tarefas (title, description, created_by) VALUES ?';
    
    const values = tarefas.map(tarefa => [tarefa.title, tarefa.description, tarefa.created_by]);

    db.query(sql, [values], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ insertedIds: result.insertId });
    });
});

// Listar tarefas
app.get('/tarefas', (req, res) => {
    db.query('SELECT * FROM tarefas', (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
});

// Deletar uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tarefas WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json(err);
        // Retorna uma mensagem de sucesso
        res.status(200).json({ message: `Tarefa com ID ${id} deletada com sucesso.` });
    });
});

app.listen(port, () => {
    console.log(`API rodando no http://localhost:${port}`);
});
