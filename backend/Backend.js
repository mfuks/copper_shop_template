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

backend.get('/products/update', function (req, res) {
    const{quantity, product_id} = req.query;
    const update = `UPDATE Products SET quantity='${quantity}' WHERE product_id='${product_id}'`
    connection.query(update, function(error, rows, fields)
    {
        if(error)
        {
            return res.send('Error in the query')
        }
        else
        {
            return res.send('Successful query')
        }
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

backend.get('/orders/max_id', function (req, res) {
    connection.query("SELECT MAX(order_id) FROM Orders", function(error, rows, fields)
    {
        if(error)console.log('Error in the query')
        else console.log('Successful query')
        res.send([...rows])
    });
});


backend.get('/orders/add', function (req, res) {
    const{Users_user_id, delivery_type, delivery_cost} = req.query;
    console.log(Users_user_id, delivery_type, delivery_cost)
    const update = `INSERT INTO Orders (Users_user_id, delivery_type, delivery_cost)
    VALUES('${Users_user_id}', '${delivery_type}', '${delivery_cost}')`
    connection.query(update, function(error, rows, fields)
    {
        if(error)
        {
            return res.send('Error in the query')
        }
        else
        {
            return res.send('Successful query')
        }
    });
});

backend.get('/user_products/add', function (req, res) {
    const{product_id, product_quantity, Orders_order_id} = req.query;
    console.log(product_id, product_quantity, Orders_order_id)
    const update = `INSERT INTO User_products (product_id, product_quantity, Orders_order_id)
    VALUES('${product_id}', '${product_quantity}', '${Orders_order_id}')`
    connection.query(update, function(error, rows, fields)
    {
        if(error)
        {
            return res.send('Error in the query')
        }
        else
        {
            return res.send('Successful query')
        }
    });
});

backend.get('/addresses', function (req, res) {
    connection.query("SELECT * FROM Addresses", function(error, rows, fields)
    {
        if(error)console.log('Error in the query')
        else console.log('Successful query')
        res.send([...rows])
    });
});

backend.get('/addresses/add', function (req, res) {

    const{firstname, lastname, email, address, city, zipCode, phone, Users_user_id, Orders_order_id} = req.query;
    console.log(firstname, lastname, email, address, city, zipCode, phone, Users_user_id, Orders_order_id)
    const insert_products = `INSERT INTO Addresses (firstname, lastname, email, address, city, zipCode, phone, Users_user_id, Orders_order_id) 
   VALUES('${firstname}', '${lastname}', '${email}', '${address}', '${city}', '${zipCode}', '${phone}', '${Users_user_id}', '${Orders_order_id}')`;
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
