// pegando meu modulo globalmente
var clienteModel = require('../models/clienteModels')();

module.exports.index = function(req,resp){
     // enviando dados para views
     clienteModel.all(function (erro, resultado) {
        resp.render('site/home', { clientes: resultado });//final do codigo
    });
}

module.exports.store = function(){

}

module.exports.show = function(){

}