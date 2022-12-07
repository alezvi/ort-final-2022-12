const { Peajes , Cabinas } = require ('../../db/models')

//Obtener listado de peajes con sus correspondientes cabinas ordenadas ascendetemente
async function getPeajes () {
    const list = await Peajes.findAll({
        attributes: ['provincia','ruta','kilometro'],
        include:[{
            model: Cabinas,
            order: [{model: Cabinas},'numero','DESC']  
        }]
    })

    return list
}

module.exports = {
    getPeajes
}