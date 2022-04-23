const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

const connectionString = 'postgres://vucyjqfdbuqnms:6174b3cfedd5823fb37afed8dd3e4c0c03088d3046723e3e0b662e2a9daf16c9@ec2-44-199-143-43.compute-1.amazonaws.com:5432/dclpb7c5iikh36';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

export { pool };