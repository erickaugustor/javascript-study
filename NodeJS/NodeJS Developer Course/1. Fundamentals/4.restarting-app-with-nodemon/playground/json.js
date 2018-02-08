/* var obj = {
    name: 'Andrew'
};

var stringObjs = JSON.stringify(obj);
console.log(typeof stringObjs);
console.log(stringObjs); */




/* var personString = '{"name": "Andrew", "age": 25}';
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person); */







const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body',
};

// originalNoteString - String
var originalNoteString = JSON.stringify(originalNote);


fs.writeFileSync('notes.json', originalNoteString);


//read:
var noteString = fs.readFileSync('notes.json');

// note - Object 
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);