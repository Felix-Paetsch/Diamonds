const express = require("express"),
app = express();

//setting view engine to ejs
app.set("view engine", "ejs");
app.use('/public', express.static('public'));

//route for index page
app.get("/", function (req, res) {
    res.render("home", {
        quote: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});