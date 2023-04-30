'use strict'
const data = require('./mock/data')

module.exports = async function (fastify) {
  fastify.get('/', async function () {
    return 'Funds'
  })
  fastify.get('/warren-fic-fim-cp', async function () {
    return data
  })
  fastify.get('/warren-fic-fim-cp/statistics', async function () {
    return data.statistics
  })
}