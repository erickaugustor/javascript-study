
const expect = require('expect');

const utils = require('./utils'); 



describe('Utils', () => {
    it('should add two numbers', () => {
    var res = utils.add(22, 11);

    expect(res).toBe(33).toBeA('number');
    //é igual ao:
    // if(res !== 33){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
    });
    //bdd, behavior driven development 



    //async mocha test
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) =>{
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should async square two numbers', (done) => {
        utils.asyncSquare(4, (square) =>{
            expect(square).toBe(16).toBeA('number');
            done();
        });
    });


    it('should square a number', () => {
    var res = utils.square(3);
    
    expect(res).toBe(9).toBeA('number');
    // if(res !== 9){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
    });


});





it('should expect some values', ()  =>  {
    //expect(12).toNotBe(11);
    //===
    //expect({name: 'Andrew'}).toEqual({name: 'Andew'});
    //==

    //expect([2, 3, 4]).toInclude(3);
    //está no array.
    //expect([2, 3, 4]).toExclude(1);
    //não está no array.

    expect({
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }).toInclude({
        age: 25
    })

});

it('should verify first and last name are set', () => {
    var user = {
        location: 'Philadelphia',
        age: 25
    };

    var res = utils.setName(user, 'Andrew Mead');


    expect(res).toInclude({
        firstName: 'Andrew',
        lastName: 'Mead'
    });
});



/*
    Comando para executar npm:
    nodemon --exec "npm test"
*/