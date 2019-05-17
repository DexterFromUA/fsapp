var {Pool} = require('pg').native;

require('dotenv').config();

const pool = new Pool({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5432,
    database: process.env.DATABASE || 'zara',
    user: process.env.USER || 'root',
    password: process.env.PASS || 'root',
    idleTimeoutMillis: 20000
});

module.exports = {
    query: async (query, props) => {
        const client = await pool.connect();
        const result = await client.query(query, props);
        await client.end();

        return result
    },
    queryAsync: (query, props) => {
        return pool.query(query, props)
            .then(res => {
                pool.end();
                return res
            })
            .catch(e => console.log(e))
    },
    end: () => {
        return pool.end;
    }
};
