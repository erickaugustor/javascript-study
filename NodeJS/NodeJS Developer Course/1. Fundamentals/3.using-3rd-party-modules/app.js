//Require from npm!

console.log('Starting app.js');

//Npm init!
//Pegar o nome do node e ex: npm install lodash --save
//Ele colocará nas dependencias do package Json

const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Erick', 1, 2, 3, 'Erick', 1, 2]);
console.log(filteredArray);

//Logo, você já poderá retirar a pasta gerada pelo npm
//Para instalar novamente, digite: npm install

//Ou se você preferir, você pode utilizar o git ignore!