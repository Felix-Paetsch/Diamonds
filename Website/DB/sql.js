(async () => {

    //programm to delete, create and fill all the tables in the db
    const clientdata = require("./client.json")
    const {Client} = require('pg')
    const client = new Client(clientdata);

    const jsonFile = require("./tables.json");

    client.connect();

    FillTables = async() => {

    }

    for (let x in jsonFile) {
        let res = await client.query(`DROP TABLE IF NOT EXISTS ${x}`);
    }

    for (let x in jsonFile) {
        let res = await client.query(jsonFile[x]);
    }

    client.end();

})()