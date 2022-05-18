
const config = require("./api.json")

module.exports = (app,db) => {
    app.post(config[1]["route"], function(req,res) {
       if(req.body.password == "password"){
            params = []
            for (let j in config[1]["params"][0]){
                console.log("j is : ",j)
                console.log(req.body[config[1]["params"][0][j]])
                params.push(req.body[config[1]["params"][0][j]])
            }
            console.log("params is :",params)
        
            db.query(config[1]["query"], params
            )
            res.send('successfully send')

        }else{
            res.send('Api failed')
        }
    })}