const {Peaje,Direccion} = require('../../db/models')

async function getAll() {
    let query = {
        include: [{
        model: Direccion,
    }]}
    ; 

    return await Peaje.findAll(query);
}

async function getById(id) {
    return await Peaje.findByPk(id);
}

module.exports = {
    getAll,
    getById
}