// acessando o modulo IDBCursor.js
var db = require('../../config/db');

module.exports = function () {
    // pegando todos os dados do cliente do banco
    this.all = function (retorno) {

        var connect = db();// recebendo a nossa conexao

        return connect.query('select * from clientes', retorno);

    };
    // pegando só um dados do banco
    this.find = function (id, retorno) {

        var connect = db();// recebendo a nossa conexao

        return connect.query('select * from clientes where id = ?',id, retorno);

    };

     // Inserindo dados no banco
     this.save = function (dados, retorno) {

        var connect = db();// recebendo a nossa conexao

        return connect.query('insert into clientes set ?',dados, retorno);

    };

    return this;
};