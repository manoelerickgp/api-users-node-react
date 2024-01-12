import { pool } from './db.js';

pool`
    CREATE TABLE users (
        id          SERIAL PRIMARY KEY,
        name        TEXT NOT NULL,
        email       TEXT NOT NULL,
        fone        TEXT NOT NULL,
        birthdate   DATE NOT NULL
    );
`.then(() => {
    console.log('Tabela criada');
});