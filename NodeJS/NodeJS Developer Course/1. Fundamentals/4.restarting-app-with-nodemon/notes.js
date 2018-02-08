console.log('Starting notes.js');

var addNote = (title, body) =>{
    console.log('Adding note', title, body);
};


var getAll = () => {
    console.log('Getting all notes');
};

var getNotes = (title) => {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote,
    getAll,
    getNotes,
    removeNote
};