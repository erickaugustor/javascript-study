/* 
    
    var fs = require('fs');

    var readme = fs.readFileSync('readme.txt', 'utf8');
    // console.log(readme);


    fs.writeFileSync('writeme.txt', readme);

    //code

*/

var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('writeme.txt', data);
});

/* DELETE */

fs.unlink('writeme.txt');