const router = require("express").Router();
const { getSuggestionDropdown } = require("../../controller/common/suggestionDropdown")

router.get("/", getSuggestionDropdown);

module.exports = router;