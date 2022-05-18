const path = require('path');

require('dotenv').config({path:path.join(__dirname,"../.env")});
const db = require('./poolConnect.js');

(async () => {

    //programm to delete, create and fill all the tables in the db
    const fs = require("fs");

    const get_table_query = `
        SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG='Diamonds';
    `;

    await (await db.query(get_table_query)).rows.map(x => x.table_name).filter(x => {
        return !(x.startsWith("pg_") || x.startsWith("sql_"))
    }).forEach(async (x) => {
        await db.query(`DROP TABLE IF EXISTS ${x};`)
    })
    const path = require("path")

    let sql = fs.readFileSync(path.join(__dirname,'tables.sql'), "utf8");
    await db.query(sql);

})()