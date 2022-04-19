const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost:5000/movies,
    user: 'root',
    password: '',
    database: 'movies-controll'
})

module.exports = Connection;
