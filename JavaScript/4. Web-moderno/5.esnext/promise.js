/*
    pending - aguardando
    fulfilled - sucesso na operação
    rejected - houve um problema
    settled - já foi realizada
*/

let promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('A promise 1 foi resolvida');
    }, 2000);
});

let promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('A promise 2 foi resolvida');
    }, 2000);
});

promise2.then((resultado) => {
    console.log(resultado);
});