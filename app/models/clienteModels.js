// acessando o modulo IDBCursor.js
var db = require('../../config/db');

module.exports = function() {
    // pegando todos os dados do cliente do banco
    this.all = function(retorno){

        var connect = db();// recebendo a nossa conexao

       return connect.query('select * from clientes', retorno); 

    };

          return this;    
};