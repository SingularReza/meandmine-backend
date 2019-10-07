/*
    This is being used for mal fansub extension api
*/

const mariadb = require('mariadb');

const pool = mariadb.createPool({
    user: 'root',
    password: 'Chandan@13',
    host: '134.209.152.214',
    port: 3306,
    database: 'mal_fansubs'
});

async function fansubs(showId) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * from comments where showid = ?", [showId]);
        const test = await conn.query("SELECT * from comments LIMIT 100");
        console.log(test);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

exports.getFansubs = fansubs