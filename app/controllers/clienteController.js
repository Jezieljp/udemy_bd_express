// pegando meu modulo globalmente
var clienteModel = require('../models/clienteModels')();

module.exports.index = function (req, resp) {
    // enviando dados para views
    clienteModel.all(function (erro, resultado) {
        resp.render('site/home', { clientes: resultado, erros:{} });//final do codigo coloque aqui erros tambem
    });
}

module.exports.store = function (req, resp) {

    var dados = req.body;//recebendo dados do formulario    

    // Criando a validação do formulario
    req.assert('nome', 'Preencha seu Nome').notEmpty();//notEmpty para ver se ta vazio o campo

    var validacaoErros = req.validationErrors();

    if (validacaoErros) {
        console.log(validacaoErros);
        // enviando dados para views
        clienteModel.all(function (erro, resultado) {
            resp.render('site/home', { clientes: resultado,erros:validacaoErros });//final do codigo
        });
        return;
    }



    // Va no model e crie o metodo save
    clienteModel.save(dados, function (erro, resultado) {

        // verificando se existem erro ao adicionar o cliente
        if (!erro) {
            resp.redirect('/')
            resp.render('site/detalhe', { cliente: resultado[0] });
        } else {
            console.log("erro ao adicionar cliente no banco de dados!!!");
            resp.redirect('/'); //redirecionando a mensagem
        }
    })

}

// pegando um dado do banco agora va no arquivo clienteModel
module.exports.show = function (req, resp) {
    clienteModel.find(req.params.id, function (erro, resultado) {
        // verifcando se existe o cliente

        if (resultado[0] && !erro) {
            resp.render('site/detalhe', { cliente: resultado[0] });
        } else {
            console.log("Esse cliente não existe!!!");
            resp.redirect('/'); //redirecionando a mensagem
        }
    });

};