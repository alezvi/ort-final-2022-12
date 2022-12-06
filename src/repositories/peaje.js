const {Peaje} = require('../../db/models')

let attributesToExclude = ['createdAt', 'updatedAt']

async function getPeajes(){
  return await Peaje.findAll({
    attributes: {
      exclude: attributesToExclude
    }
  })
}

async function getPeajesById(id){
  return await Peaje.findByPk(id, {
    attributes: {
      exclude: attributesToExclude
    }
  })
}


module.exports = {
  getPeajes,
  getPeajesById
}
