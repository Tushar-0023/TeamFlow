const db = require("../config/db");

// GET DASHBOARD STATS
exports.getStats = async (req, res) => {
  try {
    const [projects] = await db.execute(
      "SELECT COUNT(*) AS total FROM projects"
    );

    const [tasks] = await db.execute(
      "SELECT COUNT(*) AS total FROM tasks"
    );

    const [completed] = await db.execute(
      "SELECT COUNT(*) AS total FROM tasks WHERE status = 'done'"
    );

    const [pending] = await db.execute(
      "SELECT COUNT(*) AS total FROM tasks WHERE status != 'done'"
    );

    res.json({
      totalProjects: projects[0].total,
      totalTasks: tasks[0].total,
      completedTasks: completed[0].total,
      pendingTasks: pending[0].total,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};