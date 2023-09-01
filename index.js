const express = require("express");
const cors = require("cors");
const news = require("./data/news.json");
const categories = require("./data/categories.json");
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Daily News Server")
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log("Daily News Server is running on port no:", port);
} )