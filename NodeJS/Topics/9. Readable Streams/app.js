var http = require('http');
var fs = require('fs');


/* SMALL PIECES */

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunck received: ');
    console.log(chunk);
});
