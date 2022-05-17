module.exports = (app,client) => {

    app.post('/api/quote', function(req,res) {
        console.log(req.body.password)
        if (req.body.password == '1234'){

            client.connect();

            res.send('succsesfully send')
        }else{
            res.send('Api request failed')
        }
        
    })

    app.post('/api/horoscopes', function(req,res) {
        console.log(req)
        res.send('succsesfully send')
    })

    app.post('/api/article', function(req,res) {
        console.log(req)
        res.send('succsesfully send')
    })
}