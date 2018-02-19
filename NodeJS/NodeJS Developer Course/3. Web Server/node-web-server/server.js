const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express();


//partials: uma parte do código que será reutilizada 
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


//Middleware, adicionar funcionalidades!
app.use((request, response, next) => {
    var now = new Date().toString();
    var log = `${now}: ${request.method} ${request.url}`;

    console.log(log);
    //o terceiro parametro é um callback, mas não é necessário.
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err){
            console('Unable to append to server.log');
        }
    });
    next(); 
});



//Middleware: Para de executar as coisas. 
/* app.use((request, response, next) =>{
    response.render('maintenance.hbs');
}) */

//Middleware:
app.use(express.static(__dirname + '/public'));



//registrando uma funcionalidade para por no template engine
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) =>{
    return text.toUpperCase();
});



app.get('/', (request, response) => {
    //response.send('<h1>Oi!</h1>');

    /* response.send({
        name: 'Andrew',
        likes: [
            'Biking',
            'Cities'
        ]
    }); */
    
    response.render('home.hbs', {
        pageTitle: 'Home Page', 
        welcomeMessage: 'Welcome to my website',
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page'
    });
    //response.send('About Page');
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to hangle request'
    });
});


//starting listening
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});