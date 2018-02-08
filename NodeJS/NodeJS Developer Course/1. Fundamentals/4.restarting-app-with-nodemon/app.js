//Instal nodemon
//npm install nodemon -g, para colocar na máquina (-g)

console.log('Hello from app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

//Arguments array
//Comands line:
console.log(process.argv);


var command = process.argv[2];
console.log('Command:', command);
console.log(process.argv);

if(command === 'add'){
    console.log('Adding new note');
}else if(command === 'list'){
    console.log('Listing all notes');
}else if(command === 'read'){
    console.log('Reading note');
}else if(command === 'delete'){
    console.log('Removing note');
}else{
    console.log('Command not recognized');
}