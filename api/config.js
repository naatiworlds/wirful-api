// config.js
require('dotenv').config(); // Importa las variables de entorno desde el archivo .env

module.exports = {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 3306,
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'natiworlds',
  DB_DATABASE: process.env.DB_DATABASE || 'natiworlds',
};
