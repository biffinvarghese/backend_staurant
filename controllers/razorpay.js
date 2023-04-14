// import functions from User model


// import { createOrder } from "../config/razorpay.js";
import axios from "axios";
// import {Flatted} from 'flatted'


// get all Users
export const createRazorpayOrder =  (req, res) => {
    let token = 'rzp_test_iJs9lNifWJnygM:L62yDlfuWWbZ3LgVBq4njrTb'
    token = 'Basic ' + btoa(token)
    console.log('respo', req.body)
    try {
        axios.post('https://api.razorpay.com/v1/orders', req.body, {
            headers: {
                "Authorization": 'Basic cnpwX3Rlc3RfaUpzOWxOaWZXSm55Z006TDYyeURsZnVXV2JaM0xnVkJxNG5qclRi'
            }
        }).then((response) => {
            console.log('GET lion:',response.data)
            res.send((response.data))
        })
        
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
};