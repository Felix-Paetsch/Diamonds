(async () => {

    //programm to delete, create and fill all the tables in the db
    const clientdata = require("./client.json")
    const {Client} = require('pg')
    const client = new Client(clientdata);

    const jsonFile = require("./tables.json");

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

    for (let x in jsonFile) {
        let res = await client.query(jsonFile[x]);
    }

    client.end();

})()