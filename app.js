const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv").config();
const db = require("./configs/database");

app.use(express.json());

app.get("/test", (req, res) => {
    res.send("API Wroking!");
});
server.listen(process.env.APP_PORT, () => {
    console.log(`Server listening to ${process.env.APP_PORT}`);
});