
//strings
var msg = "Hello Word!";
console.log(msg.startsWith("Hello"));
console.log(msg.endsWith("!"));
console.log(msg.includes("x"));
console.log(msg.startsWith("Hello", 4));    //retornará true
//irá retornar falso ou true

console.log("hello".repeat(2));
//irá repetir

var indent = " ".repeat(4), identLevel = 0;
var newIdent = indent.repeat(identLevel++);
//irá incrementar 

console.log(typeof msg);
console.log(message.length);

msg = "\'Hello\' World";
console.log(message.length);

var html = '    <div><h1>Hello</h1></div> '.trim();
//trim remove os espaços aleatórios do lado.

var name = "Erick", 
message = "Hello, ${name}";
console.log(message);


var count = 10, price = 0.25;
message = "${count} items cost $${(count * price).toFixed(2)}";
console.log(message);


//listener do click
document.getElementById("click").addEventListener("click", function(){
    alert('OI');
})
