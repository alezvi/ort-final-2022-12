const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')
const { Employee } = require('../db/models');

const nameTest = "Juan";
const sureNameTest = "Suarez";
const dniTest = 25689741;

describe('Employees', function () {
    let employeeId
    let crearDatosTest = async function () {
        var admissionDate = new Date()
        var employeeCreado = await Employee.create({
            name: nameTest,
            sureName: sureNameTest,
            dni: dniTest,
            admissionDate: admissionDate
        })
        employeeId = employeeCreado.id;
    }
    before(crearDatosTest);
    after(async function () {
        await Employee.destroy({
            where: { id: employeeId },
        })
    });
    it('GET/employees - No Content', async function () {
        return request(app)
            .get('/employees')
            .then(res => {
                assert.equal(res.status, 204);//No content
            })
    })
    it('GET/employees - Query DNI', async function () {
        return request(app)
            .get('/employees')
            .query({dni:dniTest})
            .then(res => {
                assert.equal(res.status, 200);
            })
    })
    it('POST/Employee - MISSING_DNI', async function () {
        return request(app)
            .post('/employees')
            .send({ name: "NombrePrueba", sureName: "ApellidoPrueba"})
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, "MISSING_DNI");
            })
    })
    it('POST/Employee - MISSING_NAME', async function () {
        return request(app)
            .post('/employees')
            .send({ sureName: "ApellidoPrueba", dni: 25478549 })
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, "MISSING_NAME");
            })
    })
    it('POST/Employee - MISSING_SURENAME', async function () {
        return request(app)
            .post('/employees')
            .send({ name: "NombrePrueba", dni: 25476649 })
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, "MISSING_SURE_NAME");
            })
    })
    it('POST/Employee - INVALID_DNI', async function () {
        return request(app)
            .post('/employees')
            .send({ name: "NombrePrueba", sureName: "ApellidoPrueba", dni: 2})
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, "INVALID_DNI");
            })
    })
    it('POST/Employee - INVALID_NAME', async function () {
        return request(app)
            .post('/employees')
            .send({ name: "N", sureName: "ApellidoPrueba", dni: 25476649})
            .expect(400)
            .then(res => {
                assert.equal(res.body.message, "INVALID_NAME");
            })
    })
    /* it('POST/Employee - Created', async function () {
        return request(app)
            .post('/employees')
            .send({ name: "Horacio", sureName: "Kabak", dni: 28445646})
            .then(res => {
                assert.equal(res.status, 201);
            })
    }) */

})