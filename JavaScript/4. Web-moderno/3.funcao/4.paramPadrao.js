//estrategia 1 para gerar valor padrao
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a+b+c
}

//erro exemplo
console.log(soma1(0,0,0))


//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    //b = 1, indice do argumento
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1: c
    return a+b+c
}

//valor padrao do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}