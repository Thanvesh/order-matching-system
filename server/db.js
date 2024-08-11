const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'tcp://0.tcp.in.ngrok.io',  // Your MySQL host
  port:11036 ,
  user: 'root',       // Your MySQL username
  password: 'Thani@1997',       // Your MySQL password
  database: 'order_matching'  // Your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
