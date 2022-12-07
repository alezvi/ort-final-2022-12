const { Empleados } = require("../../db/models");
const {Op} = require('sequelize');

async function save(name, lastname, dni, fechaIngreso, peajeId) {
  return await Empleados.create({
    name,
    lastname,
    dni,
    fechaIngreso,
    peajeId,
  });
}

async function getByQueryString(params = {}){
    let query = {
        where: {}
    }

    if (params.name != null) {
        query.where.name = {
            [Op.substring] : params.name
        }
    }

    if (params.lastname != null) {
        query.where.lastname = {
            [Op.substring] : params.lastname
        }
    }

    if (params.dni != null) {
        query.where.dni = {
            [Op.substring] : params.dni
        }
    }

    return await Empleados.findAll(query);
}


module.exports = {
  save,
  getByQueryString
};
