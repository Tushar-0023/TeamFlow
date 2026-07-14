const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboard.controller");

// GET DASHBOARD STATS
router.get("/stats", dashboardController.getStats);

module.exports = router;