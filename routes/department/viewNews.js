const router = require("express").Router();
const { getNews } = require("../../controller/department/viewNews");

router.get("/", getNews);

module.exports = router;