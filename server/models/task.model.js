const db = require("../config/db");

const Task = {
 create: (projectId, title, priority = "medium", dueDate = null) => {
  return db.execute(
    "INSERT INTO tasks (project_id, title, status, priority, due_date) VALUES (?, ?, 'todo', ?, ?)",
    [projectId, title, priority, dueDate]
  );
},

  getByProject: (projectId) => {
    return db.execute(
      "SELECT * FROM tasks WHERE project_id = ?",
      [projectId]
    );
  },

  updateStatus: (taskId, status) => {
    return db.execute(
      "UPDATE tasks SET status = ? WHERE id = ?",
      [status, taskId]
    );
  },

  deleteTask: (taskId) => {
    return db.execute(
      "DELETE FROM tasks WHERE id = ?",
      [taskId]
    );
  },
};

module.exports = Task;