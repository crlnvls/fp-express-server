const express = require("express");
const cors = require("cors");

const updateVisits = require("./visits");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    const visits = updateVisits();
    res.json({ greeting: `Hello, visitor ${visits}!` });
});

module.exports = app;
