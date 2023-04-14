import {createNewOrder, fetchOrderData} from "../models/OrderModel.js";

// create Booking
export const createOrder=(req,res)=>{
    const data = req.body;
    createNewOrder(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
// fetch Booked tables
export const fetchOrder=(req,res)=>{
    fetchOrderData((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            console.log(results)
            res.send(results);
        }
    });
};
// // fetch Booked tables
// export const fetchBookedTablesByTableId=(req,res)=>{
//     getBookedTablesById(req.params.table_id, (err,results)=> {
//         if (err) {
//             res.send(err);
//         }else {
//             console.log(results)
//             res.send(results);
//         }
//     });
// };
// // update Booked tables
// export const updateBookedTable=(req,res)=>{
//     updateBookedTableConfig(req.params.table_id, req.body, (err,results)=> {
//         if (err) {
//             res.send(err);
//         }else {
//             console.log(results)
//             res.send(results);
//         }
//     });
// };
// // delete Booked tables
// export const deleteBookedTable=(req,res)=>{
//     deleteBookedTableConfig(req.params.table_id, (err,results)=> {
//         if (err) {
//             res.send(err);
//         }else {
//             console.log(results)
//             res.send(results);
//         }
//     });
// };