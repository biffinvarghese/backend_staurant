import {createNewFoodCategory, fetchFoodCategoryData} from "../models/FoodCategoryModel.js";

// create Booking
export const createFoodCategory=(req,res)=>{
    const data = req.body;
    createNewFoodCategory(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
// fetch Booked tables
export const fetchFoodCategory=(req,res)=>{
    fetchFoodCategoryData((err,results)=> {
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