const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Daily News Server")
})

app.listen(port, () => {
    console.log("Daily News Server is running on port no:", port);
} )