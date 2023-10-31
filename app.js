const express = require("express");
const cors = require("cors");
const colorsController = require("./controllers/colorsController.js")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/colors", colorsController)

app.get("/", (req, res) => {
    res.send("Welcome to Colors App");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;