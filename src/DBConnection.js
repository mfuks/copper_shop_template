function  DBConnection()
{
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: "localhost",
        user: "marta",
        database: "copper_shop_db"
    });
    connection.connect(function(error) {
        if (error) throw error;
        console.log("Connected!");
        const sql = "SELECT * FROM Products";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            console.log(result);
        });
    });
}

// DBConnection();

export {DBConnection};