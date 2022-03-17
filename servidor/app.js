'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const mongoose = require('mongoose')

try{
  mongoose
  .connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

}catch(e){
  console.error(`No se ha podido conectar a la Base de datos! ${e}`);
}
module.exports = async function (fastify, opts) {
  // Place here your custom code!

    fastify.register(require('fastify-cors'), { 
      // put your options here
    })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}