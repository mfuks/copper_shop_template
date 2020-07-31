const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const backend = express();
const port = 5000;

//database connection
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


//table Products
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

//table Users
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

//table Orders

backend.get('/orders', function (req, res) {
    connection.query("SELECT * FROM Orders", function(error, rows, fields)
    {
        if(error)console.log('Error in the query')
        else console.log('Successful query')
        res.send([...rows])
    });
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
    const insert_order = `INSERT INTO Orders (Users_user_id, delivery_type, delivery_cost)
    VALUES('${Users_user_id}', '${delivery_type}', '${delivery_cost}')`
    connection.query(insert_order, function(error, rows, fields)
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

//table User_products
backend.get('/user_products', function (req, res) {
    connection.query('SELECT * FROM User_products', function(error, rows, fields)
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
    const insert_user_products = `INSERT INTO User_products (product_id, product_quantity, Orders_order_id)
    VALUES('${product_id}', '${product_quantity}', '${Orders_order_id}')`
    connection.query(insert_user_products, function(error, rows, fields)
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

//table Addresses
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
    const insert_address = `INSERT INTO Addresses (firstname, lastname, email, address, city, zipCode, phone, Users_user_id, Orders_order_id) 
   VALUES('${firstname}', '${lastname}', '${email}', '${address}', '${city}', '${zipCode}', '${phone}', '${Users_user_id}', '${Orders_order_id}')`;
    connection.query(insert_address,  (error, results) =>
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


//table Messages
backend.get('/messages/add', function (req, res) {

    const{firstname, email, message} = req.query;
    const insert_message = `INSERT INTO Messages (firstname, email, message) 
   VALUES('${firstname}', '${email}', '${message}')`;
    connection.query(insert_message,  (error, results) =>
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
