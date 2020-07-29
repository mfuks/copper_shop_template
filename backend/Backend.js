const express = require('express')
const backend = express();
const port = 5000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'marta',
    database: 'copper_shop_db'
});

connection.connect(function (error){
    if(error) console.log('Error')
    else console.log('Connected')
});

backend.get('/getproducts', function (req, res) {

    connection.query("SELECT * FROM Products", function(error, rows, fields)
    {
        if(error)console.log('Error in the query')
        else console.log('Successful query')
        res.send({products: [...rows]})
    });
});

backend.listen(port);
