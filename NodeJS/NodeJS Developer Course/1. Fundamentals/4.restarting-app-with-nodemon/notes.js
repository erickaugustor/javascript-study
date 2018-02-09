console.log('Starting notes.js');

const fs = require('fs');




/*
    Functions
*/

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);    
    }catch(e){   
        return [];
    }
};


var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


/*
    Real application
*/

var addNote = (title, body) =>{
    console.log('---------------------');
    console.log('Adding note', title, body);
    console.log('---------------------');

    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    //Algum nome duplicado
    var duplicateNotes = notes.filter((note) => note.title === title);

    //Se for === 0, não tem duplicado!
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }  

    //else, retorna undefined!

};




var getAll = () => {
    console.log('---------------------');
    console.log('Getting all notes');
    console.log('---------------------');


};




var getNotes = (title) => {
    console.log('---------------------');
    console.log('Getting note', title);
    console.log('---------------------');

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note. title === title);
    return filteredNotes[0];
};




var removeNote = (title) => {
    console.log('---------------------');
    console.log('Removing note', title);
    console.log('---------------------');

    //fetch notes.
    var notes = fetchNotes();
    //all notes in variable notes

    //filter notes, removing the one with title of argument.
    var filteredNotes = notes.filter((note) => note.title !== title);

    //save new notes array.
    saveNotes(filteredNotes);

    //São iguais? Quer dizer que não foi removido nada.
    return notes.length !== filteredNotes.length;

}



var logNote = (note) => {
    console.log('---------------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('---------------------');
};






module.exports = {
    addNote,
    getAll,
    getNotes,
    removeNote,
    logNote
};