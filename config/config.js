// config/config.js
require('dotenv/config');

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "mysql"
  }
}