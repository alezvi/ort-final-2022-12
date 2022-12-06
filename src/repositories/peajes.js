const {Peaje,Direccion} = require('../../db/models')

async function getAll() {
    let query = {
        include: [{
        model: Direccion,
    }]}
    ; 

    return await Peaje.findAll(query);
}

module.exports = {
    getAll
}