const { assert } = require("chai");
const request = require("supertest");
const app = require("../app");
const { Empleados, Peajes } = require("../db/models");

describe("Empleados", function () {
  var _empleado;

  before(async function () {
    _empleado = await Empleados.create({
      name: "Cosme",
      lastname: "Fulanito",
      dni: "21908792",
      fechaIngreso: "2022-12-06",
      peajeId: 2,
    });
  });

  after(async function () {
    await _empleado.destroy();
  });

  describe("POST /empleados", function () {
    describe("Missing params", function () {
      it("Requiere un nombre", function (done) {
        request(app)
          .post("/empleados")
          .send({
            lastname: "Gomez",
            dni: "40108975",
            fechaIngreso: "2022-12-06",
            peajeId: 5,
          })
          .expect(400)
          .end(function (err, res) {
            assert.equal(res.body.message, "MISSING_NAME");
            if (err) done(err);
            return done();
          });
      });

      it("Requiere un apellido", function (done) {
        request(app)
          .post("/empleados")
          .send({
            name: "Jose",
            dni: "40108975",
            fechaIngreso: "2022-12-06",
            peajeId: 5,
          })
          .expect(400)
          .end(function (err, res) {
            assert.equal(res.body.message, "MISSING_LASTNAME");
            if (err) done(err);
            return done();
          });
      });

      it("Requiere un dni", function (done) {
        request(app)
          .post("/empleados")
          .send({
            name: "Jose",
            lastname: "Gomez",
            fechaIngreso: "2022-12-06",
            peajeId: 5,
          })
          .expect(400)
          .end(function (err, res) {
            assert.equal(res.body.message, "MISSING_DNI");
            if (err) done(err);
            return done();
          });
      });
    });

    describe("Invalid params", function () {
      it("El nombre no es válido", function (done) {
        request(app)
          .post("/empleados")
          .send({
            name: "J",
            lastname: "Gomez",
            dni: "40108975",
            fechaIngreso: "2022-12-06",
            peajeId: 5,
          })
          .expect(400)
          .end(function (err, res) {
            assert.equal(res.body.message, "INVALID_NAME");
            if (err) done(err);
            return done();
          });
      });

      it("El apellido no es válido", function (done) {
        request(app)
          .post("/empleados")
          .send({
            name: "Jose",
            lastname:
              "Gooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
            dni: "40108975",
            fechaIngreso: "2022-12-06",
            peajeId: 5,
          })
          .expect(400)
          .end(function (err, res) {
            assert.equal(res.body.message, "INVALID_LASTNAME");
            if (err) done(err);
            return done();
          });
      });

      it("El dni no es válido", function (done) {
        request(app)
          .post("/empleados")
          .send({
            name: "Jose",
            lastname: "Gomez",
            dni: "40108975222",
            fechaIngreso: "2022-12-06",
            peajeId: 5,
          })
          .expect(400)
          .end(function (err, res) {
            assert.equal(res.body.message, "INVALID_DNI");
            if (err) done(err);
            return done();
          });
      });
    });
  });

  describe("GET /empleados", function () {
    describe("Buscar empleado por query string", function (done) {
      request(app)
        .get("/empleados")
        .query({ apellido: "ani" })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          assert.equal(res.body.length, 2);
          if (err) throw err;
          return done();
        });
    });
  });
});
