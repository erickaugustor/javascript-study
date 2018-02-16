var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }else{
                reject('Arguments must be numbers!');
            }
        }, 1500)
    });
};

asyncAdd(1, 2).then((resolve)=>{
    console.log('Result: ', resolve);
    return asyncAdd(resolve, 33);

}, (errorMessage) => {
    console.log(errorMessage);

}).then((resolve) => {
    console.log('Should be 36', resolve);

}).catch((errorMessage) => {
    console.log(errorMessage);
});



// var somePromise = new Promise((resolve, reject) => {
//     //async code
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         //reject('Unacle to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Sucess: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });