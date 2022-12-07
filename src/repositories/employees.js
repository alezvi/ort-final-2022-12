const { Employee } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['updatedAt', 'createdAt']
    }
}

async function getByName(name) {
    let query = {
        where: {name:name},
        attributes: queryAttributes.attributes,
    }
    return await Employee.findAll(query)
}

async function getBySureName(sureName) {
    let query = {
        where: {sureName:sureName},
        attributes: queryAttributes.attributes,
    }
    return await Employee.findAll(query)
}

async function exist(dni){
    return await  Employee.findOne({ where: {dni : dni}})
}

async function save(name,sureName,dni){
    let admissionDate = new Date();
    return await Employee.create ({
        name,
        sureName,
        dni,
        admissionDate

    })
}

module.exports = {
    getByName,
    getBySureName,
    exist,
    save
}