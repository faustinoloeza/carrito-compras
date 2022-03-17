'use strict'

const {getCars, getCar, getCarsOptions, createCar} = require('../../controllers/cartController');

module.exports = async function (fastify, opts) {
  fastify.get('/', getCarsOptions);
  fastify.get('/:id', getCar);
  fastify.post('/', createCar);
}

