
const config = require("./api.json")

module.exports = (app,db) => {
    config.forEach(request => {
        app["method"](request["route"], function(req,res) {
            
            if(req.body.password == "password"){
                // für jedes element im Array params eines request der json Datei
                //  -> gebe req.body."eben_das_element" zurück
                params = request.params.map(p => req.body[p])
                db.query(request["query"], params)
                res.send('successfully send')
    
            }else{
                res.send('Api failed')
            }
        })
    })
}