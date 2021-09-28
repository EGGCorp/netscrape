const { Pool } = require('pg');

const PG_URI = 'postgres://ioxsrgxg:I80kwwTltWNsStz4AypxxiTDrMDgxJM3@raja.db.elephantsql.com/ioxsrgxg';

const pool = new Pool({
    connectionString: PG_URI
})



module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };