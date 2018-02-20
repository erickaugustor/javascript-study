const express = require('express');

var app = express();

app.get('/', (request, response) => {
    //response.send('Hello World!');
    response.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});



app.get('/users', (request, response)=>{
    res.send([{
        name: 'Mike',
        age: 27
    }, {
        name: 'Andrew',
        age: 25
    }, {
        name: 'Jen',
        age: 26
    } ]);
});
// GET /users
// Give users a name prop and age prop.

app.listen(3000);


module.exports.app = app;