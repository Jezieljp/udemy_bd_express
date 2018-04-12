// conectando ao banco mysql
var mysql =  require('mysql');

var connect = function(){
    return mysql.createConnection({
        host:'localhost',
        user: 'root',
        passaword:'',
        database:'curso_node'
    });

};

module.exports = connect;