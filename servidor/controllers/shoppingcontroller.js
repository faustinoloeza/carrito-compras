const ShoppingList = require ('../models/shoppingListModel');


//Obteniendo la lista del carrito de compras
const getShoppingList = async (req, res) => {
    try {
        const items = await ShoppingList.find();
        return items;
    } catch (e) {
      throw e;
    }
  };

//Obteniendo un item del carrito de compras
  const getItemList = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await ShoppingList.findById(id);
        return item;
    } catch (e) {
      throw e;
    }
  };

//Me permite crear un item en el carrito de compras
  const createItem = async (req, res) => {
    try {
        const body = req.body;
        const newItem = new ShoppingList(body);
        await newItem.save();
        return newItem;
    } catch (e) {
      throw e;
    }
  };

  //Me permite actualizar un item en el carrito de compras
  const updateItem = async (req, res) => {
    try {
        const item = await ShoppingList.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        return item;
    } catch (e) {
      throw e;
    }
  };

   //Me permite eliminar un item en el carrito de compras
   const deleteItem = async (req, res) => {
    try {
        const item = await ShoppingCart.findByIdAndDelete(req.params.id);
        res.send(204).send();
        return item;
    } catch (e) {
      throw e;
    }
  };

  module.exports = {
    getShoppingList,
    getItemList,
    createItem,
    updateItem,
    deleteItem
}