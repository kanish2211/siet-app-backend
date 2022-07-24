const router = require("express").Router();
const insertNews = require("../../controller/department/news");

router.post("/", insertNews);

module.exports = router;