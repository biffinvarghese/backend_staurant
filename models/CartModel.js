// import connection
import db from "../config/database.js";

// get all items
export const getAllItems = (result) => {
    const id= 'active'
    db.query("SELECT * FROM cart WHERE status = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get all items by user id
export const getCartByUserId = (id,result) => {
    db.query("SELECT * FROM cart WHERE user_id = ? AND status= ?",[id, "active"], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get all purchased items
export const getAllPurchasedCarts = (id,result) => {
    db.query("SELECT * FROM cart WHERE status= ?",[ "purchased"], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get all purchased items
export const getAllPurchasedCartByIdData = (id,result) => {
    db.query("SELECT * FROM cart WHERE status= ? AND id=?",[ "purchased", id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// get a items by user id, food id
export const getItemByUserIdAndProductId = (user,result) => {
    db.query("SELECT * FROM cart WHERE user_id = ? AND status = ?",[user, "active"], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// insert new item to cart
export const insertToCart = (data,result) => {
    db.query("INSERT INTO cart SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// update qty of a cart item
export const updateCartItemQty = (data,result) => {
    db.query("UPDATE cart SET cart_details = ? WHERE user_id = ?  AND status = ?",[data.cart_details, data.user_id, "active"], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// update qty of a cart item
export const updateStatus = (data,result) => {
    db.query("UPDATE cart SET status = ? WHERE user_id = ?",[data.status, data.user_id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};


// delete cart item
export const deleteItemInCart = (user,product,result) => {
    db.query("DELETE FROM cart WHERE user_id = ? AND product_id = ?",[user,product], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// delete all Items
export const deleteAllItemsByUser = (id,result) => {
    db.query("DELETE FROM cart WHERE user_id = ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};