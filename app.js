const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8000;

const newsRouter = require("./routes/department/news");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/news", newsRouter);

app.listen(port, () => {
    console.log(`App is running at Port ${port}`);
});

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

(async() => {
    try {
        await client.connect();
        console.log("Connected successfully to server");

        global.client = client;
        global.sietdb = client.db("siet");

        return "done.";
    } catch (error) {
        console.error(error);
    }
})();