DROP DATABASE IF EXISTS Gerenciamento_de_tarefas;
CREATE DATABASE Gerenciamento_de_tarefas;

USE Gerenciamento_de_tarefas;

CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) NOT NULL
);
