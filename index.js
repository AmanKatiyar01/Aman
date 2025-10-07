const express = require("express");
const app =express();

const {open} = require('sqlite');
const sqlite3 =require('sqlite3');
const path = require('path');

let db = null;


const dbPath =path.join(__dirname,"goodreads.db");

const initializeDBAndServer = () => {
    try{
     
         open({
        filename:dbPath,
        driver: sqlite3.Database
        });
        app.listen(3000, () => {
    console.log("Server is Running at http://localhost:3000");
});
    }
    catch(e){
        console.log(`DB Error: ${e.message}`);
    }
}
initializeDBAndServer();

   
 
app.get("/books/", async(request, response) => {
    const getBookQuery = 
    select * 

    From book
    ORDER BY book_id;

    const bookArray = await db.all(getBOOKQuery);
    response.send(bookArray);
});