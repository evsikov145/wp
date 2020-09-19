const mysql = require("mysql2");

/*-------- DATABASES ---------*/

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "wp",
    password: "admin"
});
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

/*-------- ЗАПРОСЫ ---------*/

export default (req, res) => {
    let data;
    connection.query("SELECT * FROM mainpage",(err, results) => {
        if(err){
            console.log(err);
        }else {
            data = results;
        }
    });

    console.log(data)

    const users = [{ id: 1 }, { id: 2 }, { id: 3 }]

    res.status(200).json(users)
    res.setHeader('Content-Type', 'application/json')
    return res.json(users)

}


/*-----------------*/