import {
    insertBook,
    insertBooking,
    getBookedTables,
    getBookedTablesById,
    updateBookedTableConfig,
    deleteBookedTableConfig,
    getBookings
} from "../models/BookTableModel.js";


// create client Booking
export const createBook = (req, res) => {
    const data = req.body;
    insertBook(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// create Booking
export const createBooking = (req, res) => {
    const data = req.body;
    insertBooking(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};
// fetch Booked tables
export const fetchBookedTables = (req, res) => {
    getBookedTables(async (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log(results)

            res.send(results);
        }
    });
};
// fetch Booked tables
export const fetchBookings = (req, res) => {
    getBookings(async (err, results) => {
        if (err) {
            res.send(err);
        } else {

            res.send(results);

        }
    });
};
// fetch Booked tables
export const fetchBookedTablesByTableId = (req, res) => {
    getBookedTablesById(req.params.table_id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log(results)
            res.send(results);
        }
    });
};
// update Booked tables
export const updateBookedTable = (req, res) => {
    updateBookedTableConfig(req.params.table_id, req.body, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log(results)
            res.send(results);
        }
    });
};
// delete Booked tables
export const deleteBookedTable = (req, res) => {
    deleteBookedTableConfig(req.params.table_id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log(results)
            res.send(results);
        }
    });
};