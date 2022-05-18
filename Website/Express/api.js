module.exports = (app,db) => {
    app.post('/api/quote', function(req,res) {
        if(req.body.password == "quote"){

            db.query('insert into quote (quote, author) values ($1, $2)',[req.body.quote, req.body.author])
            res.send('successfully send')

        }else{
            res.send('Api request failed')
        }
    });

    app.post('/api/horoscope', function(req,res) {
        if (req.body.password == "horoscope"){

            db.query('insert into horoscopes (type, description, image_url, href) values ($1, $2, $3, $4)',[req.body.type, req.body.description, req.body.image_url, req.body.href])
            res.send('successfully send')

        }else{
            res.send('Api request failed')
        }
    });

    app.post('/api/article', function(req,res) {
        if (req.body.password == "article"){

            db.query('insert into article (title, summary, image_url, href) values ($1, $2, $3, $4)',[req.body.title, req.body.summary, req.body.image_url, req.body.href])
            res.send('successfully send')

        }else{
            res.send('Api request failed')
        }
    });
}