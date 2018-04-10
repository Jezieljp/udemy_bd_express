// Fazendo a conexão co servidor
var express = require('express');

module.exports = function () {
    var app = express();

    // Chamando o ejs serve para criar paginas html
    app.set('view engine', 'ejs');

    // chamando as views
    app.set('views', './app/views');

    //Importando chamando o arquivo web.js
    var rotas = require('../app/routes/web');
    rotas(app);

    //  executando o servidor:
    app.listen(3000, function () {
        console.log('ok funcionando na porta 3000');
    });


};

