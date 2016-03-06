/*
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'Nohack36',
        database : 'express_diner',
        charset  : 'utf8'
  }
});
var Bookshelf = require('bookshelf')(knex);
*/


var knex = require('knex');
var bookshelf = require('bookshelf');
var _ = require('lodash');
var dbConfig = {};

dbConfig.client = process.env.DB_CLIENT;
dbConfig.connection = process.env.DB_DSN;

module.exports = bookshelf(knex(dbConfig));
