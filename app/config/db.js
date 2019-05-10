var {Pool} = require('pg');

require('dotenv').config();

var pool = new Pool({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5432,
    database: process.env.DATABASE || 'zara',
    user: process.env.USER || 'root',
    password: process.env.PASS || 'root'
});

module.exports = {
    queryAsync: (query, props) => {
        return pool.query(query, props)
            .then(res => res)
            .catch(e => console.log(e))
    },
    end: () => {
        return pool.end;
    }
};
