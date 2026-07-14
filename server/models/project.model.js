const db = require("../config/db");

const Project = {
  create: (name, description, userId) => {
    return db.execute(
      "INSERT INTO projects (name, description, user_id) VALUES (?, ?, ?)",
      [name, description, userId]
    );
  },

  getAll: (userId) => {
    return db.execute(
      "SELECT * FROM projects WHERE user_id = ?",
      [userId]
    );
  },

  update: (id, name, description, userId) => {
    return db.execute(
      "UPDATE projects SET name = ?, description = ? WHERE id = ? AND user_id = ?",
      [name, description, id, userId]
    );
  },

  // 🗑️ NEW DELETE FUNCTION
  delete: (id, userId) => {
    return db.execute(
      "DELETE FROM projects WHERE id = ? AND user_id = ?",
      [id, userId]
    );
  },
};

module.exports = Project;