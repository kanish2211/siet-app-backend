const router = require("express").Router();
const { getDashboardData } = require("../../controller/student/studentDashboard");

router.get("/", getDashboardData);

module.exports = router;