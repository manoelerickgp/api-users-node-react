import postgres from 'postgres'

export const pool = postgres({
  user: 'postgres',
  host: 'localhost',
  database: 'crud',
  password: '123456',
  port: 5432, // Porta padrão do PostgreSQL
});

