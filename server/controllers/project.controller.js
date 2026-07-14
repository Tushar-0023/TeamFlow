const Project = require("../models/project.model");

exports.createProject = async (req, res) => {
  try {
    console.log("===== CREATE PROJECT =====");
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const { name, description } = req.body;
    const userId = req.user.id;

    const result = await Project.create(name, description, userId);

    console.log("RESULT:", result);

    res.json({
      success: true,
      message: "Project created successfully",
    });
  } catch (err) {
    console.error("PROJECT ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await Project.getAll(userId);

    res.json(rows);
  } catch (err) {
    console.error("GET PROJECTS ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const userId = req.user.id;

    const [result] = await Project.update(id, name, description, userId);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      message: "Project updated successfully",
    });
  } catch (err) {
    console.error("UPDATE PROJECT ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const [result] = await Project.delete(id, userId);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (err) {
    console.error("DELETE PROJECT ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};