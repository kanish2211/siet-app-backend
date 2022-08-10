const router = require("express").Router();
const { insertSuggestionData } = require("../../controller/student/suggestion");

router.post("/", insertSuggestionData);

module.exports = router;