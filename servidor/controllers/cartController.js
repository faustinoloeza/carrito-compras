const Car = require ('../models/carModel');

//Obteniendo todos los vehiculos, definiendo un esquema personalizado.
const getCarsOptions = {
    schema: {
        response:{
            200: {
                type: 'array',
                items:{
                    type: 'object',
                    properties: {
                        _id: {type: 'string'},
                        name: { type: 'string' },
                        maker: { type: 'string' },
                        price_mxn: {typeo: 'number'},
                        price_usd: {typeo: 'number'},
                        descripcion: {type: 'string'},
                        models: {type: 'array'},
                    }
                }
            }
        }
    },
    handler:  async function (req, res)  {
        const cars = await Car.find();
        return cars;
      }
}

//Obteniendo vehiculos
const getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        return cars;
    } catch (e) {
      throw e;
    }
  };

//Obteniendo un unico vehiculo
  const getCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        return car;
    } catch (e) {
      throw e;
    }
  };

//Me permite crear un vehiculo
  const createCar = async (req, res) => {
    try {
        const body = request.body;
        const newCar = new Car(body);
        await newCar.save();
        return newCar;
    } catch (e) {
      throw e;
    }
  };

  module.exports = {
    getCars,
    getCarsOptions,
    getCar,
    createCar
}