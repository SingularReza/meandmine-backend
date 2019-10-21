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

async function subgroups(showId, res) {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("fangroup connection opened!")
        const rows = await conn.query("SELECT groups.groupname, shows.approve_line, groups.language, groups.groupid from groups, shows WHERE showid = ? AND groups.groupid = shows.groupid", [showId]);
        res.send(rows);
        console.log('fangroup connection done!')
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

async function comments(showId, groupId, res) {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("fansub connection opened!")
        const rows = await conn.query("SELECT * from comments WHERE showid=? AND groupid=?", [showId, groupId])
        res.send(rows);
        console.log('fansub connection done!')
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

exports.getComments = comments
exports.getGroups = subgroups