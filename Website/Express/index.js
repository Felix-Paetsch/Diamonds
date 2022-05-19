const express = require("express")
const path = require("path")

app = express();
app.use(express.json())

const db= require("../DB/poolConnect.js")

require('./api.js')(app,db)


//setting view engine to ejs
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'))
app.use('/public', express.static(path.join(__dirname, './public')));

//route for index page
app.get("/", function (req, res) {
    res.render("home", {
        quote: {
            text: "In a world where love does not exist, in a world where you are alone and will never fiend your significant other, we are here. To help you with the hottest bullshit horoskopes can give you!",
            author: "Ernest Hemingway"
        },
        date: "21. January 1793",
        horoscopes: [
            {
                type: "How much wood would a woodchuck chuck?",
                description: "He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if as woodchuck could cut wood.",
                image_url: "wha",
                href: "/wha"
            },        {
                type: "Ehne mehne muh",
                description: "Und dran bist du!!! Ich weiß nicht womit oder warum. Aber was solls.",
                image: "wha",
                href: "/wha"
            }
        ],
        articles: [
            {
                title: "Why pets are a scam",
                summary : "Have you ever wondered about why the only animals you ever see are either pets or the steak on the grill and the meat you eat?",
                image: "/public/icon.png",
                href: "/public/icon.png"
            },{
                title: "Why reality isn't real",
                summary : "You are not real. You are not real. You are not real. You are not real. You are not real. You are not real. You are not real. You are not real.",
                image: "/public/icon.png",
                href: "/public/icon.png"
            },{
                title: "Friends that are not real are the best friends!",
                summary : "In this article we gonna answer the question 'Who is god, and how do I invent my own imaginary friend to start a religion?'",
                image: "/public/icon.png",
                href: "/public/icon.png"
            }
        ]
    });
});

app.listen(4000, function () {
  console.log("Server is running on port 4000 ");
});