const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8000;

const newsRouter = require("./routes/department/news");
const dashboardDataRouter = require("./routes/student/studentDashboard");
const suggestionDataRouter = require("./routes/student/suggestion");
const suggestionViewDataRouter = require("./routes/department/suggestionView");
const viewNewsRouter = require("./routes/student/suggestion");
const insertStudentDetailsRouter = require("./routes/department/insertStudentDetails")

app.use(bodyParser.json());
app.use(cors());

app.use("/api/department/news", newsRouter);
app.use("/api/student/dashboard", dashboardDataRouter);
app.use("/api/student/suggestion", suggestionDataRouter);
app.use("/api/department/suggestionView", suggestionViewDataRouter);
app.use("/api/student/viewNews", viewNewsRouter);
app.use("/api/department/studentDetails", insertStudentDetailsRouter);



app.listen(port, () => {
  console.log(`App is running at Port ${port}`);
});

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

(async () => {
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
