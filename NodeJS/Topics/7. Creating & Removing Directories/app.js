var fs = require('fs');

/* 
    Criando: 
    fs.mkdirSync('stuff');

*/

/*
    Removendo:
    fs.rmdirSync('stuff');

*/

/*
    Criando uma pasta, lendo um arquivo e copiando ele para dentro da pasta:
    fs.mkdir('stuff', function(){
        fs.readFile('readme.txt', 'utf8', function(err, data){
            fs.writeFile('./stuff/writeme.txt', data);
        });
    });
*/

/* Removendo diretórios que contém arquivos */
    fs.unlink('./stuff/writeme.txt', function(){
        fs.rmdir('stuff');
    })
