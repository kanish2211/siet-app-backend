const router = require("express").Router();
const { insertNews } = require("../../controller/department/insertNews");

router.post("/", insertNews);

module.exports = router;