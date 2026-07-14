const Task = require("../models/task.model");

// CREATE
exports.createTask = async (req, res) => {
  try {
const { project_id, title, priority, due_date } = req.body;

    const result = await Task.create(
      project_id,
      title,
      priority || "medium",
      due_date || null
    );

    res.json({
      success: true,
      message: "Task created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// GET
exports.getTasks = async (req, res) => {
  try {
    const { projectId } = req.params;

    const [rows] = await Task.getByProject(projectId);

    res.json(rows);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// UPDATE STATUS
exports.updateStatus = async (req, res) => {
  try {
    const { taskId, status } = req.body;

    await Task.updateStatus(taskId, status);

    res.json({
      success: true,
      message: "Status updated",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// DELETE
exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    await Task.deleteTask(taskId);

    res.json({
      success: true,
      message: "Task deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};