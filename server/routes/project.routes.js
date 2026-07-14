const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

const auth = require("../middleware/auth.middleware");

router.post("/", auth, createProject);
router.delete("/:id", auth, deleteProject);
router.put("/:id", auth, updateProject);
router.get("/", auth, getProjects);

module.exports = router;