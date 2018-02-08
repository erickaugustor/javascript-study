console.log('Starting notes.js');


//Para exportar algo:
//console.log(module);  ---> Exports, um objeto que exporta tudo!

module.exports.age = 25;

//Arrow Function, exportada.
module.exports.addNote =  () => {
    console.log('addNote was called!');
    return 'New note!';
};

//Challenge
module.exports.add = (a, b) => {
    return a + b;
};