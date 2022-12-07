const db = require('../../db/models/index.js');
const tipotarifa = require('../../db/models/tipotarifa.js');


const getTarifas = async (req,res) => {
    const tarifas = await db.Tarifa.findAll({
        include: [{model: db.TipoTarifa, as: 'TipoTarifa'},{model:db.TipoVehiculo, as: 'TipoVehiculo'}],
        where:{vigente: true},
        order: ['valor'],
    });
    return res.json(tarifas);
}

module.exports = {
    getTarifas
}