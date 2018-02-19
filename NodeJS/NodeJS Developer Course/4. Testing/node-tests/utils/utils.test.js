
const expect = require('expect');

const utils = require('./utils'); 

it('should add two numbers', () => {
    var res = utils.add(22, 11);

    expect(res).toBe(33).toBeA('string');
    //é igual ao:
    // if(res !== 33){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});
//bdd, behavior driven development 

it('should square a number', () => {
    var res = utils.square(3);
    
    expect(res).toBe(9).toBeA('number');
    // if(res !== 9){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});




/*
    Comando para executar npm:
    nodemon --exec "npm test"
*/