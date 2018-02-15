
//arguments é algo interno
//que soma todos os parametros que são colocados na chamada
//sempre que uma função é chamada, existe esse arguments

function soma(){
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i]
    }

    return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 3.4, 3, 5))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))