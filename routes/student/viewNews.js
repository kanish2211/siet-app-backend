const router = require("express").Router();
const { getNewsData } = require("../../controller/student/suggestion");

router.get("/", getNewsData);

module.exports = router;