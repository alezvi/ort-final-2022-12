const {assert} = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Autenticación de cabinas de Peajes', function(){
    describe('Creacion de una nueva cabina', function(){
        it('Si la cabina no existe puedo crearla', function(done){
            request(app)
                .post('/peajes/')
                .send({
                    numero: 1,
                    direccion: 1
                })
                .expect(201)
                .end(function(err, res){
                    assert.equal(res.body.message, "SUCCESFULLY_CREATED")
                    if(err) done(err)
                    return done()
                })

        })
    })
})