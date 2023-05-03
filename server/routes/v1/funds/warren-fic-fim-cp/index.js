const data = require('../mock/data')
module.exports = async function (fastify) {
  fastify.get('/statistics', async function () {
    return data.statistics
  })
}