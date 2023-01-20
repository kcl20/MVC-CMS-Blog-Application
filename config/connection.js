const Sequelize = require('sequelize'); // import sequelize
require('dotenv').config(); // import environment variables from .ENV file using dotenv module

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001,
  }
);

module.exports = sequelize;
