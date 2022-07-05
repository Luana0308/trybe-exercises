require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USERNAME ||"root",
    "password": process.env.PASSWORD || 080393,
    "database": process.env.DATABASE || books_exercicio,
    "host": process.env.HOST || "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
