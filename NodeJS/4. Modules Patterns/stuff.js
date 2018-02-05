/*

    var counter = function(arr){
        return 'There are ' + arr.length + ' elements in this array';
    }; 

    module.exports.counter = counter; 

*/

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

/* 
    module.exports.adder = adder;
    module.exports.pi = pi;
*/


/* ----------------------------------------------------- */
module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}; 

/* ----------------------------------------------------- */

module.exports = {
    adder: adder,
    pi: pi
};