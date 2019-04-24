var {Pool} = require('pg');

var pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'zara',
    user: 'root',
    password: 'root'
});

module.exports = {
    queryAsync: (q, p) => {
        return pool.query(q, p)
            .then(res => res)
            .catch(e => console.log(e))
    },
    end: () => {
        return pool.end;
    }
};
