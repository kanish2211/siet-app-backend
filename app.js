const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose")

const app = express();
const port = 8000;

mongoose
  .connect("mongodb://localhost:27017/sietManagement",{
    useUnifiedTopology: true,
  })
  .then(()=>{
    console.log("yooohoooo DB Connectedd!!!")
  });


  const loginRoute= require("./routes/authentication/login")
// const newsRouter = require("./routes/department/insertNews");
// const dashboardDataRouter = require("./routes/student/studentDashboard");
// const suggestionDataRouter = require("./routes/student/suggestion");
// const suggestionViewDataRouter = require("./routes/department/suggestionView");
// const viewNewsRouter = require("./routes/common/viewNews");
// const suggestionDropdowndata = require("./routes/common/suggestionDropdown");
// const insertStudentDetailsRouter = require("./routes/department/insertStudentDetails")


app.use(bodyParser.json());
app.use(cors());

app.use("/api",loginRoute)
// app.use("/api/department/news", newsRouter);
// app.use("/api/student/dashboard", dashboardDataRouter);
// app.use("/api/student/suggestion", suggestionDataRouter);
// app.use("/api/department/suggestionView", suggestionViewDataRouter);
// app.use("/api/viewNews", viewNewsRouter);
// app.use("/api/suggestion-dropdown", suggestionDropdowndata);
// app.use("/api/department/studentDetails", insertStudentDetailsRouter);




app.listen(port, () => {
  console.log(`App is running at Port ${port}`);
});

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// (async () => {
//   try {
//     await client.connect();
//     console.log("Connected successfully to server");

//     global.client = client;
//     global.sietdb = client.db("siet");

//     return "done.";
//   } catch (error) {
//     console.error(error);
//   }
// })();









