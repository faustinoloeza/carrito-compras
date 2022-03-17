const { Schema, model} = require('mongoose');

const carSchema = new Schema(
    {
        name: {
          type: String,
          required: true, 
        },
        maker: {
            type: String,
            required: true, 
          },
          car_type: {
            type: String,
            required: true, 
          },
          price_mxn: {
            type: String,
            required: true, 
          },
          price_usd: {
            type: String,
            required: true, 
          },
          descripcion: {
            type: String,
            required: true, 
          },
          models: {
            type: Array,
            required: true, 
          },
    },
{
    timestamps: true,
    versionKey: false,
});

module.exports =  model('Car', carSchema);