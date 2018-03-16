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
    }, 5000);
});

let promise3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('A promise 3 foi rejeitada');
    }, 5000);
});

Promise.all([promise1, promise2, promise3])
    .then(([resultado1, resultado2, resultado3]) => {
        console.log('Todas as promises estão ok!');
    })
    .catch((error) => {
        console.log('Uma das promises foi rejeitada!');
        console.log(error);
    });