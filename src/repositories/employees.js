const { Employee } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['updatedAt', 'createdAt']
    }
}

async function getAll() {
    let query = {
        where: {},
        attributes: queryAttributes.attributes,
    }
    return await Employee.findAll(query)
}

async function exist(dni){
    return await  Employee.findOne({ where: {dni : dni}})
}

async function save(name,sureName,dni){
    let admissionDate = new Date();
    return await User.create ({
        name,
        sureName,
        dni,
        admissionDate

    })
}

module.exports = {
    getAll,
    exist,
    save
}