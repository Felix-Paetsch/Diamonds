const path = require('path');

require('dotenv').config({path:path.join(__dirname,"../.env")});

(async () => {

    //programm to delete, create and fill all the tables in the db
    
    const {Client} = require('pg')
    const client = new Client({
        "user": process.env.User,
        "host": process.env.HOST,
        "database": process.env.DATABASE,
        "password": String(process.env.PASSWORD),
        "port": process.env.PORT,
      });
    
    
    const fs = require("fs");

    client.connect();

    const get_table_query = `
        SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG='Diamonds';
    `;

    await (await client.query(get_table_query)).rows.map(x => x.table_name).filter(x => {
        return !(x.startsWith("pg_") || x.startsWith("sql_"))
    }).forEach(async (x) => {
        console.log(x);
        await client.query(`DROP TABLE IF EXISTS ${x};`)
    })
    
    let sql = fs.readFileSync("C:\\git\\Diamonds\\Website\\DB\\tables.sql", "utf8");
    await client.query(sql);
    
    client.end();

})()