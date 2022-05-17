const path = require('path');

require('dotenv').config({path:path.join(__dirname,"../.env")});

(async () => {

    //programm to delete, create and fill all the tables in the db
    const clientdata = require("./client.json")
    const {Client} = require('pg')
    const client = new Client({
        "user": process.env.User,
        "host": process.env.HOST,
        "database": process.env.DATABASE,
        "password": String(process.env.PASSWORD),
        "port": process.env.PORT,
      });

    const jsonFile = require("./tables.json");

    client.connect();

    FillTables = async() => {

    }

    for (let x in jsonFile) {
        let res = await client.query(`DROP TABLE IF EXISTS ${x};`);
    }

    for (let x in jsonFile) {
        let res = await client.query(jsonFile[x]);
    }

    client.end();

})()