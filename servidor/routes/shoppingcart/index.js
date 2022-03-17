'use strict'

const {getShoppingList, getItemList, createItem, updateItem, deleteItem} = require('../../controllers/shoppingcontroller');

module.exports = async function (fastify, opts) {
  fastify.get('/', getShoppingList);
  fastify.get('/:id', getItemList);
  fastify.post('/', createItem);
  fastify.put('/:id', updateItem);
  fastify.delete('/:id', deleteItem);
}

