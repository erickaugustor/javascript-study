//Instal nodemon
//npm install nodemon -g, para colocar na máquina (-g)

console.log('Hello from app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//Arguments array
//Comands line:
//console.log(process.argv);


const argv = yargs.argv;

var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if(command === 'add'){
    console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
    console.log('Listing all notes');
    notes.getAll();
}else if(command === 'read'){
    console.log('Reading note');
    notes.getNotes(argv.title);
}else if(command === 'remove'){
    console.log('Removing note');
    notes.removeNote(argv.title);
}else{
    console.log('Command not recognized');
}

//npm install yargs@4.7.1 --save
//--save é para por no JSON