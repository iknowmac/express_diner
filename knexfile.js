require('dotenv').load();
var path = require('path');

module.exports = {
  client: process.env.DB_CLIENT,
  connection: process.env.DB_DSN,
  migrations: {
    directory: path.join(__dirname, 'db/migrations'),
    tableName: '_db_versions'
  },
  seeds: {
    directory: path.join(__dirname, 'db/seeds')
  }
};
