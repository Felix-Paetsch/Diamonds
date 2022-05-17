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
// DD.MM.YYYY
Timestamp = (date) =>{
    if (date == null){
        max = Date.now()
    } else{ date = date.split(".");
    let newDate = new Date( date[2], date[1] - 1, date[0]);
    max = newDate.getTime();
    }
    return(Integer(0,max))
}
// type ... 'f' für forename, 'l' für lastname, irgendwas sonst für beides
// NameGender ... 'm' für männlicheNamen, 'f' für weiblicheNamen, irgendwas sonst für einen aus beiden
Name = (type, NameGender) =>{
    
    getName = (names,max) =>{
        
        start = Integer(1,max)
        do{
            start -= 1;
        } while (names[start]!=' ');
        end = start+2;
        do{
            end += 1;
        } while (names[end]!=' ')
        return(names.slice(start,end).trim())
    }

    foreName = (NameGender) =>{
        if (NameGender=='m'){
            let max = 23206
            let names = fs.readFileSync(path.join(__dirname,'maleNames.txt'),'utf8')            
            return (getName(names,max));
        } else if ( NameGender=='f'){
            let max = 35539
            let names = fs.readFileSync(path.join(__dirname,'femaleNames.txt'),'utf8')            
            return (getName(names,max));
        } else{
            let max = 35539+23206
            let names = fs.readFileSync(path.join(__dirname,'femaleNames.txt'),'utf8') + fs.readFileSync(path.join(__dirname,'maleNames.txt'),'utf8')  
            return (getName(names,max));
        }
        }
    
    lastName = () =>{
        let max = 695414;
        let names = fs.readFileSync(path.join(__dirname,'lastNames.txt'),'utf8') 
        return (getName(names,max));
    }

    if (type=='f'){
        return(foreName(NameGender))
    }else if (type=='l'){
        return(lastName())
    }else{
        return(foreName(NameGender)+' '+ lastName())
    }
}

Text = (length) =>{
    let start =  Integer(0,2000);
    return fs.readFileSync(path.join(__dirname,'text.txt'),'utf8').slice(start,start+length);
}

Dates = (minYear, maxYear) =>{
    if (maxYear==null){
        max=9007199254748991
    }
    if (minYear==null){
        min= -9007199254748991;
    }

    const MonthsWith31Days = [1,3,5,7,8,10,12];
    let year =  Integer(minYear, maxYear-1)
    let month =  Integer(1, 12)

    if (month in MonthsWith31Days) {
         day =  Integer(1,31); 
    } else if (month != 2) {
         day =   Integer(1,30);
    } else {
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


