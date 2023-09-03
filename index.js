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

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const specificNews = news.find(n => n._id === id);
    res.send(specificNews);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const specificCategory = news.filter(n => parseInt(n.category_id) === id);
    res.send(specificCategory);
})

app.listen(port, () => {
    console.log("Daily News Server is running on port no:", port);
} )