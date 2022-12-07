const { assert } = require("chai");
const request = require("supertest");
const app = require("../app");
const { Peaje } = require("../db/models");
const { Direccion } = require("../db/models");

describe("Testeo de peajes", function () {
  var direccionPrueba;

  before(async function () {
    direccionPrueba = await Direccion.create({
      provincia: "Santa Fe",
      ruta: 10,
      kilometro: 28,
    });
  });

  after(async function() {
    await direccionPrueba.destroy();
  })
  describe("Testeo del GET", function () {
    it("Obtener todos los peajes", function () {
      request(app)
        .get("/peajes")
        .set("Accept", "application(json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
        });
    });
    it("Obtener evento por direccion", function () {
      request(app)
        .get("/peajes")
        .query({ direccionId: direccionPrueba.id })
        .set("Accept", "application(json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
        });
    });
  });
});
