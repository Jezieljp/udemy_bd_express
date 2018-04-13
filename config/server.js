module.exports = function () {
    // Fazendo a conexão co servidor
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');

    // executando express
    var app = express();

    // Chamando o ejs serve para criar paginas html
    app.set('view engine', 'ejs');

    // chamando as views
    app.set('views', './app/views');

    // executando body-parser para usarmos json dentro do form
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

     //executado o expressValidator   
     app.use(expressValidator()); 

    //Importando chamando o arquivo web.js
    var rotas = require('../app/routes/web');
    rotas(app);

    //  executando o servidor:
    app.listen(3000, function () {
        console.log('ok funcionando na porta 3000');
    });


};

