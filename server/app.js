const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes");



const indexRoutes = require("./routes/index.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", require("./routes/dashboard.routes"));

app.get("/", (req, res) => {
    res.send("TeamFlow Backend Running...");
});

module.exports = app;