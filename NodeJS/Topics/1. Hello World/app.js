console.log('hello');


/* Nome do diretório */
console.log(__dirname);

/* Nome do arquivo */
console.log(__filename);

/* Segundos */
setTimeout(function(){
    console.log('3 seconds have passed;')
}, 3000);


/* Segundos pares  */
var time = 0;

setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed.')
}, 2000);


/* Parando */
var times = 0;

var timer = setInterval(function(){
    times += 2;
    console.log(times + ' seconds have passed!')
    if(times > 5){
        clearInterval(timer);
    }
}, 2000)