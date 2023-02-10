// express
const express = require("express");
const app = express();

var cors = require("cors");

// middleware
app.use(cors());

// dotenv
require("dotenv").config();

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json("hello world");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
