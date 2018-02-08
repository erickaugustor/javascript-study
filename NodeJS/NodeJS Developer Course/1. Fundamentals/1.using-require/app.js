console.log('Starting app.');

//Require é uma função do node.
//Você deve passar uma string.
//Assim, você poderá utilizar as funções.

//Require permite acessar as funcionalidades do módulo!
const fs = require('fs');

//Assim, você devera digitar o arquivo e o texto. 
fs.appendFileSync('greetings.txt', 'Hello Word');

//ou


/*
 *      
 *      fs.appendFile('greetings.txt', 'Hello World!', function(err){
 *          if(err){
 *              console.log('Unable to write to file');
 *          }
 *      });
 *
 */


//Criará um arquivo novo (greetings), caso ele não exista.
//Caso exista, ele irá adicionar o texto ao fim. 


//Require do módulo OS.
const os = require('os');
var user = os.userInfo();

fs.appendFileSync('hello friend.txt', `Hello ${user.username}`);