const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const backend = express();
const port = 5000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'marta',
    database: 'copper_shop_db'
});

connection.connect(function (error){
    if(error) console.log('Error')
    else console.log('Connected')
});

backend.use(cors());

backend.get('/products', function (req, res) {

    connection.query("SELECT * FROM Products", function(error, rows, fields)
    {
        if(error)console.log('Error in the query')
        else console.log('Successful query')
        res.send([...rows])
    });
});

backend.get('/users', function (req, res) {
    connection.query("SELECT * FROM Users", function(error, rows, fields)
    {
        if(error)console.log('Error in the query')
        else console.log('Successful query')
        res.send([...rows])
    });
});

backend.get('/users/add', function (req, res) {

   const{firstname, lastname, email, login, user_password, address, city, zipCode, phone} = req.query;
   const insert_products = `INSERT INTO Users (firstname, lastname, email, login, user_password, address, city, zipCode, phone) 
   VALUES('${firstname}', '${lastname}', '${email}', '${login}', '${user_password}', '${address}', '${city}', '${zipCode}', '${phone}')`;
   connection.query(insert_products,  (error, results) =>
   {
       if(error)
       {
           return res.send('Error in the query')
       }
       else
       {
           return res.send('Successful query')
       }
   })

});



backend.listen(port);
