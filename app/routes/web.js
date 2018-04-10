// pegando meu modulo globalmente
var clienteModel = require('../models/clienteModels')();


// configurando as rotas
module.exports = function(app){
    app.get('/contato', function(req, resp){
        // Pegando a pagina contatos
        resp.render('site/contato');
    });
    
    app.get('/', function(req, resp){

        // enviando dados para views
        var listaClientes = clienteModel.all();
               resp.render('site/home', {clientes:listaClientes});//final do codigo
    });    

    app.get('/sobre', function(req, resp){
        resp.render('site/sobre');
    });

};//agora va no arquivo serve e de um require 