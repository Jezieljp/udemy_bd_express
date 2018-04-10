// modulo server exportando para o app
var app = require('./config/server');
app();


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


