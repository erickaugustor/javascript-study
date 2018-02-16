
var somePromise = new Promise((resolve, reject) => {
    //async code
    setTimeout(() => {
        resolve('Hey. It worked!');
        //reject('Unacle to fulfill promise');
    }, 2500);
});

somePromise.then((message) => {
    console.log('Sucess: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});