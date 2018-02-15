//Closure é o escopo criado quando uma função é declarada 
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }

    return dentro
}

//função lembra das suas origins 
const minhaFuncao = fora()
console.log(minhaFuncao())


//closure é o escopo que envolve a função
//ela tem memória do local de suas origins