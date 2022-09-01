const router = require("express").Router();
const { getNews } = require("../../controller/common/viewNews");

router.get("/", getNews);

module.exports = router;