/* Normal function statement */
function sayHi(){
    console.log('hi');
}

sayHi();


/* Function Expression */
var sayBye = function(){
    console.log('bye');
};

sayBye();


/* Function, call a Function */
function callFunction(fun){
    fun();
}

callFunction(sayBye);