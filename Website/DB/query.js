(async () => {
    // run a query to test stuff

    const clientdata = require("./client.json")
    const {Client} = require('pg')
    const client = new Client(clientdata);
    client.connect();

    const QUERY = `
        SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG='Diamonds'
    `;

    const res = await client.query(QUERY);
    console.log(res);
    client.end();

})()