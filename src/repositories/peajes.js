const {Peaje, Direccion} = require('../../db/models');

async function existeCabina(numero, direccion){
    return await Peaje.findOne({
        where: numero,
        include:[
            {
                model: Direccion,
                where:{direccion}
            }
            
        ]
    })
}

async function nuevaCabina(numero, direccion){
    console.log("Entro al create");
    return await Peaje.create({
        numero,
        direccion
    })
}

module.exports = {
    existeCabina,
    nuevaCabina
}