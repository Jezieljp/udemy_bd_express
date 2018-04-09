// console.log("Ola Mundo");
// Fazendo a conexão co servidor
var express = require('express');
var app = express();
// Chamando o ejs serve para criar paginas html
app.set('view engine', 'ejs');

app.get('/contato', function(req, resp){
    // Pegando a pagina contatos
    resp.render('site/contato');
});

app.get('/', function(req, resp){
    resp.render('site/home');
});

app.listen(3000, function(){
    console.log('ok funcionando na porta 3000');
});

// var server = http.createServer(function(req, res){
//     var pagina = req.url;
//     console.log(pagina);
//     // enviar dados para o navegador
//     if(pagina == '/contato'){
//         res.end(`

//         <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Node js Com Express</title>
//     </head>
//     <body>
        
//     </body>
//     </html>  
        
//         `);

//     } else{
//         res.end(`

//         <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Node js Com Express</title>
//     </head>
//     <body>
//         <h1>Ola Mundo Aprendendo Nodemon</h1>
//     </body>
//     </html>  
        
//         `);
//     }

//     res.end(`

//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Node js Com Express</title>
// </head>
// <body>
    
// </body>
// </html>  
    
//     `);
// });


