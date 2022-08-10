const router = require("express").Router();
const { getSuggestionData } = require("../../controller/department/suggestionView");

router.get("/", getSuggestionData);

module.exports = router;