const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')
const { Peajes } = require ('../db/models')

describe ('Peajes', function() {

    describe('Listado de peajes', function () {

        // before(async function () {
        //     await Peajes.create({
        //         provincia: 'Buenos Aires',
        //         ruta: 2,
        //         kilometro: 30,
        //         createdAt: '2022-12-6',
        //         updatedAt: '2022-12-6'
        //     })

        //     await Peajes.create({
        //         provincia: 'Cordoba',
        //         ruta: 5,
        //         kilometro: 50,
        //         createdAt: '2022-12-6',
        //         updatedAt: '2022-12-6'
        //     })
        // })

        it.skip('Conocer cuantos peajes cargue en la base de datos', function (done) {
            request(app)
            .get('/peajes')
            .expect(200)
            .end(function (res,err) {
                assert.equal(res.body.length,'2')
                if(err) return done(err);
                return done();
            })

        })

            it('Que incluya la direccion como objeto anidado', function (done) {
                request(app)
                .get('/peajes')
                .expect(200)
                .end(function (res,err) {
                    assert.equal(res.body[0].provincia,'Buenos Aires')
                    assert.equal(res.body[0].ruta,'5')
                    if(err) return done(err);
                    return done();
                })

        })
    })

})