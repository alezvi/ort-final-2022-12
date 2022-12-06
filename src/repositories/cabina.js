const {Cabina} = require('../../db/models')

let attributesToExclude = ['createdAt', 'updatedAt']

async function getCabina(){
  return await Cabina.findAll({
    attributes: {
      exclude: attributesToExclude
    }
  })
}


module.exports = {
  getCabina
}