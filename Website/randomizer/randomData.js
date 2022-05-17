//what kind of Data do we need ?
// text x
// names / fr and ls
// dates x
// gender x
// numbers x
// timestamps
const path = require("path");
const fs = require('fs');

Integer= (min, max) =>{
    if (max==null){
        max=9007199254748991
    }
    if (min==null){
        min=-9007199254748991
    }
    return Math.floor(Math.random() * (max - min) ) + min;
  }
/*
Name = (type, NameGender) =>{
    foreName = (NameGender) =>{

    }
    lastName = () =>{

    }
    if (type=='f'){
        return(foreName(NameGender))
    }else if (type=='l'){
        return(lastName())
    }else{
        return(foreName(NameGender)+' '+ lastName())
    }
}*/

Text = (length) =>{
    let start =  Integer(0,2000);
    return fs.readFileSync(path.join(__dirname,'text.txt'),'utf8').slice(start,start+length);
}

Date = (minYear, maxYear) =>{
    if (maxYear==null){
        max=9007199254748991
    }
    if (min==null){
        min=-9007199254748991
    }

    const MonthsWith31Days = [1,3,5,7,8,10,12];
    let year =  Integer(minYear, maxYear)
    let month =  Integer(1, 12)

    if (month in MonthsWith31Days) {
        console.log(31);
         day =  Integer(1,31); 
    } else if (month != 2) {
        console.log(30);
         day =   Integer(1,30);
    } else {
        console.log(100)
        if (year%400==0||year%4==0 ){
             day =  Integer(1,29);
        }else{
           day =  Integer(1.28);
        }
    }
    return date = day + '.' + month+ '.' +year
}

Gender = () =>{
    x = Integer(1,3)
    if (x==1){
        return('m')
    } else if (x==2){
        return('f')
    } else{
        return('d')
    }
}


