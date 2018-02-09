//Instal nodemon
//npm install nodemon -g, para colocar na máquina (-g)

console.log('---------------------');
console.log('Hello from app.js');
console.log('---------------------');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//Arguments array
//Comands line:
//console.log(process.argv);


const argv = yargs.argv;

var command = process.argv[2];
//console.log('Command: ', command);
//console.log('Process: ', process.argv);
//console.log('Yargs: ', argv);


/*
    Main
*/

if(command === 'add'){
    console.log('---------------------');
    console.log('Adding new note');
    console.log('---------------------');


    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('---------------------');
        console.log('Note created.');
        notes.logNote(note);
    }else{
        console.log('---------------------');
        console.log('Note title taken');
        console.log('---------------------');
    }

}else if(command === 'list'){
    console.log('---------------------');
    console.log('Listing all notes');
    console.log('---------------------');
    notes.getAll();

}else if(command === 'read'){
    console.log('---------------------');
    console.log('Reading note');
    console.log('---------------------');

    var note = notes.getNotes(argv.title);
    if(note){
        console.log('---------------------');
        console.log('Note found');
        console.log('---------------------');
        notes.logNote(note);
    }else{
        console.log('---------------------');
        console.log('Note not found');
        console.log('---------------------');
    }


}else if(command === 'remove'){
    console.log('---------------------');
    console.log('Removing note');
    console.log('---------------------');

    var noteRemoved = notes.removeNote(argv.title);
    console.log('---------------------');
    var message = noteRemoved ? 'Note was removed' : 'Note not found';    
    console.log(message);
    console.log('---------------------');


}else{
    console.log('---------------------');
    console.log('Command not recognized');
    console.log('---------------------');
}


//npm install yargs@4.7.1 --save
//--save é para por no JSON