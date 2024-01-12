import { pool } from '../db.js';

export const getUsers = async (request, response) => {
    try {
   
    const data = await pool`SELECT * FROM users`

    return response.status(200).json(data)

    } catch (err) {
        return response.json(err)
    }
};

export const addUser = async (request, response) => {
    
    const { name, email, fone, birthdate } = request.body

    await pool`INSERT INTO users (name, email, fone, birthdate) VALUES (${name}, ${email}, ${fone}, ${birthdate})`;

    return response.status(201).send("Usuário criado com sucesso.");
};

