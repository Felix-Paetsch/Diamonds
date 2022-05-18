(async () => {
    // run a query to test stuff

    const db= require("./poolConnect.js")
    

    const QUERY = `CREATE TABLE IF NOT EXISTS quote (
        ID int NOT NULL,
        qoute varchar(200),
        PRIMARY KEY(ID)
      );`;

    const res = await db.query(QUERY);
    console.log(res);
    db.close();
})()