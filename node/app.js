const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'foo',
  password: 'bar',
  database: 'citizenship_app'
});

// const express = require('express');
// const app = express();
// const port = 3000

// app.get('/', (req, res) => res.send('Goodbye forever'));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));


con.connect(function(err) {
    if(err){
        return console.error('error: ' + err.message);
    }
    console.log('Database Connection established');
  });

// const question5 = { question_id: 5, question: 'Question 5?', answer: 'Answer 5' };
// con.query('INSERT INTO questions SET ?', question5, (err, res) => {
//     if(err) throw err;

//     console.log('Last insert ID:', res.insertID);
// });

// con.query(
//   'UPDATE questions SET answer = ? WHERE question_id = ?',
//   ['New answer 5', 5],
//   (err, result) => {
//     if (err) throw err;
    
//     console.log(`Changed ${result.changedRows} rows(s)`);
//   }
// );
  
  
con.query('SELECT answer FROM questions', (err,rows) => {
  if(err) throw err;

console.log('Data received from Db:\n');
console.log(rows);
});



con.end((err) => {
// The connection is terminated gracefully.
// Ensures all previously enqueued queries are still
// before sending a COM_QUIT packet to the MySQL server..
});