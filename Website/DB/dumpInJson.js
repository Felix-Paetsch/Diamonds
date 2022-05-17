const fileSystem = require("fs")

const tables= `CREATE TABLE IF NOT EXISTS quote (
  ID int NOT NULL,
  qoute varchar(200),
  PRIMARY KEY(ID)
);
CREATE TABLE IF NOT EXISTS article (
  ID int NOT NULL,
  title varchar(100),
  summary varchar(500),
  image_url varchar(100),
  href varchar(100),
  PRIMARY KEY(ID)
);
CREATE TABLE IF NOT EXISTS horoscopes (
  ID int NOT NULL,
  type varchar(20),
  description varchar(200),
  image_url varchar(100),
  href varchar(100),
  PRIMARY KEY(ID)
);`

const data = JSON.stringify(tables);
fileSystem.writeFile("./tables.json",data, err=>{
    if(err){
      console.log("Error writing file" ,err)
    } else {
      console.log('JSON data is written to the file successfully')
    }
   })

