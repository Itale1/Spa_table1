
const Pool = require('pg').Pool


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1qasdfghj',
  port: 5432,
});

const getSpatable = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM Spatable ORDER BY date ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}


module.exports = {
  getSpatable,

}