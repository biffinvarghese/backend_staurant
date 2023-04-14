// import connection
import db from "../config/database.js";

// insert Booking
export const createNewFoodCategory = (data,result) => {
    db.query("INSERT INTO foodcategories SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results);
            result(null,{
                message: "success"
            });
        }
    });
};

// get Booking
export const fetchFoodCategoryData = (result) => {
    db.query("SELECT * FROM foodcategories", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// get Booking by table id
export const getBookedTablesById = (id, result) => {
    db.query("SELECT * FROM taleconfig WHERE table_id= ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// update Booking
export const updateBookedTableConfig = (id,data, result) => {
    db.query("UPDATE taleconfig SET table_type=?, table_name=?, count=?, table_description=?, table_image=? WHERE table_id= ?",[data.table_type,data.table_name,data.count,data.table_description,data.table_image,id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// delete Booking
export const deleteBookedTableConfig = (id, result) => {
    db.query("DELETE FROM taleconfig WHERE table_id= ?",[id], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};