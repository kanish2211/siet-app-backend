const router = require("express").Router();
const news = require("../../controller/department/news");

router.post("/", news.insertNews);

module.exports = router;