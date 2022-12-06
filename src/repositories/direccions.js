const {Direccions} = require('../../db/models')

async function getAll() {
    return await Direccions.findAll();
}

module.exports = {
    getAll
}