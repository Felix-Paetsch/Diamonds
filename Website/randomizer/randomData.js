//what kind of Data do we need ?
// text
// names / fr and ls
// dates
// numbers
// timestamps
const path = require("path");
const fs = require('fs');
RndInteger= (min, max) =>{
    return Math.floor(Math.random() * (max - min) ) + min;
  }

RndText = (length) =>{
    let start = RndInteger(0,2000);
    let tex = fs.readFileSync(path.join(__dirname,'text.txt'),'utf8').slice(start,start+length);
 console.log(tex);
}

