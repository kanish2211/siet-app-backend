const router = require("express").Router();
const { insertStudentDetails } = require("../../controller/department/insertStudentDetails");

router.post("/", insertStudentDetails);

module.exports = router;