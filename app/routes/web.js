// pegando meu modulo globalmente
var clienteController = require('../controllers/clientecontroller');


// configurando as rotas
module.exports = function (app) {
    app.get('/contato', function (req, resp) {
        // Pegando a pagina contatos
        resp.render('site/contato');
    });

    app.get('/', function (req, resp) {

        // enviando dados para views
        clienteController.index(req, resp);        

    });
        //pegando apenas um dado do banco
    app.get('/detelhe/:id', function (req, resp) {
                console.log(req.params.id);
        // enviando dados para views
        //clienteController.show(req, resp);        

    });
};

    // app.get('/sobre', function (req, resp) {
    //     resp.render('site/sobre');
    // });
//agora va no arquivo serve e de um require 