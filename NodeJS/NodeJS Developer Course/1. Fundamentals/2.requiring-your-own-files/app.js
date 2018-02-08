console.log('Starting app.js');


const fs = require('fs');
const os = require('os');

//Require dos arquivos que criamos!
const notes = require('./notes.js');


var user = os.userInfo();

fs.appendFileSync('hello friend.txt', `Hello ${user.username}! 
                                        You are ${notes.age}.`);


//Utilizando a função!
var res = notes.addNote();
console.log(res);


//Challenge
console.log(`Result: ${notes.add(9,2)}`);