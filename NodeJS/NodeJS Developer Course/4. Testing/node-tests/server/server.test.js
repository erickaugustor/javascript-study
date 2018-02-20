const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;


describe('Server', () => {
    describe('GET /', () => {
        it('should return hello word response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((response) => {
                    expect(response.body).toInclude({
                        error: 'Page not found.'
                    });
                })  
                .end(done);
        });
    });

    describe('POST /users', () => {
        //Make a new test
        //assert 200
        //Assert that you exist in users array

        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((response) => {
                    expect(response.body).toInclude({
                        name: 'Andrew',
                        age: 25
                    });
                })
                .end(done);
        });
    });
});




