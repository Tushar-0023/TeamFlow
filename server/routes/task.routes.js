const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateStatus,
  deleteTask,
} = require("../controllers/task.controller");

router.post("/", createTask);
router.get("/:projectId", getTasks);

router.put("/status", updateStatus);
router.delete("/:taskId", deleteTask);

module.exports = router;