// import functions from User model

import { response } from "express";
import {
    getAllUser,
    getUserByEmail,
    userLogin,
    insertUser, getUserByUserId
} from "../models/UserModel.js";
import {createToken, verifyToken} from '../config/jwt.js'

// get all Users
export const allUsers=(req,res)=>{
    getAllUser((err,results)=> {
        if (err) {
            // var errorResponse = [];
            // errorResponse.push(err);
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get single user
export const showAUser = (req,res)=>{
    getUserByEmail(req.params.email,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get user details by user id
export const getUserById = (req,res)=>{
    console.log('get user id', req.params.id)
    getUserByUserId(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create user
export const createAccount=async (req,res)=>{
    const data = req.body;
    getUserByEmail(data, (err, response) => {
        console.log('response', response)
        if (err) {
            insertUser(data,(err,results)=> {
                if (err) {
                    console.log('error', err)
                    res.status(500).send(err);
                }else {
                    res.send({message: 'success'});
                }
            });
        } else {
            if (response&& response.length > 0) {
                res.status(400).send({
                    message: 'User Already Exist',
                    code: 4001
                })
            } else {
                insertUser(data,(err,results)=> {
                    if (err) {
                        console.log('error', err)
                        res.status(500).send(err);
                    }else {
                        res.send({message: 'success'});
                    }
                });
            }

        }
    })
};

// user authentication
export const userAuthentication=async (req,res)=>{
    const data = req.body;
    console.log('model', data)
    userLogin(data,(err,results)=> {
        console.log('login results', results)
        if (err) {
            res.status(400).send({message: "Entered Phone Number is Not Valid"});
        } else if (!results||!(results||{}).user_id){
            res.status(400).send({message: "Entered Phone Number or Password is Not Valid"});
        } else {
            const token = createToken(results)
            res.json({token});
        }
    });
};

// validate token
export const validateToken=async (req,res)=>{
    try {
        const data = req.headers.authorization.substring(7);
        console.log('data', data)
        const response = await verifyToken(data)
        console.log('data', response)
        res.send(response)
    } catch (err) {
        res.status(403).send({message: 'Token Validation Failed. Kill the app and retry.'})
    }

};