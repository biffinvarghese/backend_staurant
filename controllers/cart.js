// import functions from User model

import {
  getAllItems,
  getCartByUserId,
  insertToCart,
  updateStatus,
  updateCartItemQty,
  deleteItemInCart,
  deleteAllItemsByUser,
  getItemByUserIdAndProductId,
  getAllPurchasedCarts,
  getAllPurchasedCartByIdData,
} from "../models/CartModel.js";

// get all Items
export const allItems = (req, res) => {
  getAllItems(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// get cart by user
export const getCartByUser = (req, res) => {
  getCartByUserId(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// get all purchased cart
export const getAllPurchasedCart = (req, res) => {
  getAllPurchasedCarts(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// get all purchased cart by id
export const getAllPurchasedCartById = (req, res) => {
  console.log("query",req.params.id)
  getAllPurchasedCartByIdData(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get a Item
export const getItem = (req, res) => {
  const user_id = req.params.user_id;
  const product_id = req.params.food_id;
  getItemByUserIdAndProductId(user_id, product_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// add to cart
export const addItems = (req, res) => {
  const data = req.body;
  getItemByUserIdAndProductId(data.user_id, (err, results) => {
    if (err) {
      res.send(err);
    } else if (results && results.length > 0) {
      updateCartItemQty(data, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    } else {
      console.log("data", data);
      insertToCart(data, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.json(results);
        }
      });
    }
  });
};

// update Item
export const updateItem = (req, res) => {
  const data = req.body;
  updateCartItemQty(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update Item
export const updateCartStatus = (req, res) => {
  const data = req.body;
  updateStatus(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete a item in cart
export const deleteItem = (req, res) => {
  const user_id = req.params.user_id;
  const food_id = req.params.food_id;
  deleteItemInCart(user_id, food_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete all items in cart
export const deleteItems = (req, res) => {
  deleteAllItemsByUser(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
