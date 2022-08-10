const router = require("express").Router();
const { getDashboardData } = require("../../controller/student/studentDashboard");

router.post("/", getDashboardData);

module.exports = router;