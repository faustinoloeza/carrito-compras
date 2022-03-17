const { Schema, model} = require('mongoose');

const ShoppingListSchema = new Schema(
    {
        name: {
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
        image:{
            type: String,
            required: true, 
        }
    },
{
    timestamps: true,
    versionKey: false,
});

module.exports =  model('ShoppingList', ShoppingListSchema);