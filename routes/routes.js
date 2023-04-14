// import express
import express from "express";
// import functions from controller part
import {
  showFoods,
  showFoodById,
  createFood,
  updateFood,
  deleteFood,
} from "../controllers/food.js";

import {
  showAUser,
  createAccount,
  allUsers,
  userAuthentication, getUserById,
} from "../controllers/user.js";

import {
  addItems,
  getItem,
  updateItem,
  updateCartStatus,
  allItems,
  getCartByUser,
  deleteItem,
  deleteItems, getAllPurchasedCart,getAllPurchasedCartById
} from "../controllers/cart.js";

import {
  createBook,
  createBooking,
  fetchBookedTables,
  fetchBookedTablesByTableId,
  updateBookedTable,
  deleteBookedTable,
  fetchBookings,
} from "../controllers/booktable.js";

import {
  createFoodCategory,
  fetchFoodCategory,
} from "../controllers/foodcategory.js";
import { createProduct, fetchProduct } from "../controllers/products.js";

import upload from "../config/multer.js";
import { uploadImage } from "../controllers/imageupload.js";
import { createOrder, fetchOrder } from "../controllers/orders.js";
import { createRazorpayOrder } from "../controllers/razorpay.js";

// init of from express router
const router = express.Router();

////////////////////////// FOOD part////////////////////////////////
// get all Food
router.get("/api/foods", showFoods);

// get single Food
router.get("/api/foods/:id", showFoodById);

// create Food
router.post("/api/foods", createFood);

// update Food
router.put("/api/foods/:id", updateFood);

// delete Food
router.delete("/api/foods/:id", deleteFood);

////////////////////////// USER part ////////////////////////////////
// get all user
router.get("/api/users/:email", showAUser);

// get a user by user id
router.get("/api/users/id/:id", getUserById);

// user authentication
router.post("/api/users/authentication", userAuthentication);

// create account
router.post("/api/users/", createAccount);

// get all user
// router.post("/api/users/")

router.get("/api/users/", allUsers);

// upload an image
router.post("/api/upload", upload.single("image"), uploadImage);

////////////////////////// CART section////////////////////////////////
// add to cart
router.post("/api/cart/product/add", addItems);

// get a item in cart
router.get("/api/cartItem/:user_id/:food_id", getItem);

// get all items by user id
router.get("/api/cart/user/:id", getCartByUser);

// get all items in cart
router.get("/api/cart", allItems);

// update item qty
router.put("/api/cartItem/", updateItem);

// update item qty
router.put("/api/cart/user/status", updateCartStatus);

// get all purchased cart
router.get("/api/orders", getAllPurchasedCart);

// get purchased cart by id
router.get("/api/orders/:id", getAllPurchasedCartById);

// delete a item in cart
router.delete("/api/cartItem/:user_id/:food_id", deleteItem);

// delete all items in cart
router.delete("/api/cartItem/:id", deleteItems);

////////////////////////// Booking section ////////////////////////////////
router.post("/api/booking", createBook); //Create booking
router.post("/api/book-tables", createBooking); // Table config add
router.get("/api/book-tables", fetchBookedTables); // Table config add
router.get("/api/bookings", fetchBookings); // Get booked tables
router.get("/api/book-tables/:table_id", fetchBookedTablesByTableId);
router.put("/api/book-tables/:table_id", updateBookedTable);
router.delete("/api/book-tables/:table_id", deleteBookedTable);

////////////////////////// Food Category ////////////////////////////////
router.post("/api/food-categories", createFoodCategory);
router.get("/api/food-categories", fetchFoodCategory);

////////////////////////// Product Management ////////////////////////////////
router.post("/api/products", createProduct);
router.get("/api/products", fetchProduct);

////////////////////////// Order Management ////////////////////////////////
router.post("/api/orders", createOrder);
router.get("/api/orders", fetchOrder);

///Razor Pay////
router.post("/api/razor-pay/order", createRazorpayOrder);

// export default router
export default router;
