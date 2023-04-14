// import connection
import db from "../config/database.js";

// get all user
export const getAllUser = (result) => {
    db.query("SELECT * FROM user", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get single user
export const getUserByEmail = (data,result) => {
    db.query("SELECT * FROM user WHERE user_email = ?",[data.email], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get single user by id
export const getUserByUserId = (data,result) => {
    db.query("SELECT * FROM user WHERE user_id = ?",[data], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// get single user
export const userLogin = (data,result) => {
    db.query("SELECT * FROM user WHERE user_email = ? AND user_password = ?",[data.email, data.password], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// insert User
export const insertUser = (data,result) => {
    db.query("INSERT INTO user SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};