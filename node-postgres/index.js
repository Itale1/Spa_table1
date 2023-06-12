
const express = require('express')
const app = express()
const port = 3001
const spatable_model = require('./spatable_model')


app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});



app.get('/', (req, res) => {
  spatable_model.getSpatable()
  .then(response => {
    // res.json({table: response});
    res.json(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});

// const express = require('express')
// const Pool = require('pg').Pool
// const app = express()
// const port = 3001

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: '1qasdfghj',
//   port: 5432,
// });


// pool.connect();

// app.get('/', async (req, res) => {
//   const {rows}  = await  pool.query('SELECT * FROM Spatable ORDER BY distance ASC',
//   res.send(ok))
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })