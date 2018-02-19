const express = require('express');
const hbs = require('hbs');

var app = express();


//partials: uma parte do código que será reutilizada 
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
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
    })
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