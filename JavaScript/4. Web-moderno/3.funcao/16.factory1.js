const prod1 = {
    nome: '...',
    preco: 25
}

const prod1 = {
    nome: '...',
    preco: 32
}



//Criar novos objetos a partir da chamada de uma função

//Factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())




