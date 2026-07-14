import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // EDIT STATE
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  // FETCH PROJECTS
  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // CREATE PROJECT
  const addProject = async () => {
    if (!name.trim()) {
      toast.error("Project name is required");
      return;
    }

    try {
      await api.post("/projects", { name, description });

      toast.success("Project created successfully");

      setName("");
      setDescription("");
      setShowModal(false);

      fetchProjects();
    } catch (err) {
      toast.error("Failed to create project");
      console.log(err);
    }
  };

  // UPDATE PROJECT
  const updateProject = async () => {
    if (!name.trim()) {
      toast.error("Project name is required");
      return;
    }

    try {
      await api.put(`/projects/${editId}`, {
        name,
        description,
      });

      toast.success("Project updated successfully");

      setName("");
      setDescription("");
      setShowModal(false);
      setEditMode(false);
      setEditId(null);

      fetchProjects();
    } catch (err) {
      toast.error("Failed to update project");
      console.log(err);
    }
  };

  // DELETE PROJECT (FIXED POSITION)
  const deleteProject = async (id) => {
    try {
      if (!window.confirm("Are you sure you want to delete this project?"))
        return;

      await api.delete(`/projects/${id}`);

      toast.success("Project deleted successfully");

      fetchProjects();
    } catch (err) {
      toast.error("Failed to delete project");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-[#070b14] via-[#0b1220] to-[#070b14] text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-gray-400 text-sm mt-1">
            Manage and organize your project workspace
          </p>
        </div>

        <button
          onClick={() => {
            setShowModal(true);
            setEditMode(false);
            setEditId(null);
            setName("");
            setDescription("");
          }}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
        hover:from-blue-500 hover:to-purple-500
        shadow-lg hover:shadow-blue-500/30
        transition-all duration-300 font-medium"
        >
          + New Project
        </button>
      </div>

      {/* PROJECT LIST */}
      {projects.length === 0 ? (
        <div className="p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center text-gray-400">
          No projects found. Create your first project 🚀
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative p-5 rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-xl
            hover:scale-[1.03] hover:bg-white/10 hover:shadow-2xl
            transition-all duration-300 overflow-hidden"
            >
              {/* glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
            bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-2xl"
              />

              {/* CONTENT */}
              <div
                className="relative z-10 cursor-pointer"
                onClick={() => navigate(`/tasks/${p.id}`)}
              >
                <h3 className="text-lg font-semibold group-hover:text-blue-300 transition">
                  {p.name}
                </h3>

                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {p.description || "No description"}
                </p>

                <p className="text-xs text-blue-400 mt-4 opacity-80">
                  Click to view tasks →
                </p>
              </div>

              {/* ACTIONS */}
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditMode(true);
                    setEditId(p.id);
                    setName(p.name);
                    setDescription(p.description);
                    setShowModal(true);
                  }}
                  className="p-2 rounded-lg bg-white/5 border border-white/10
                hover:bg-blue-500/20 hover:scale-110 transition"
                >
                  ✏️
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteProject(p.id);
                  }}
                  className="p-2 rounded-lg bg-white/5 border border-white/10
                hover:bg-red-500/20 hover:scale-110 transition"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
          <div
            className="w-[420px] p-6 rounded-2xl border border-white/10
        bg-[#0f172a] shadow-2xl relative"
          >
            <h3 className="text-xl font-semibold mb-5">
              {editMode ? "Edit Project" : "Create Project"}
            </h3>

            <input
              className="w-full p-3 mb-3 rounded-xl bg-black/30 border border-white/10
            outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              className="w-full p-3 mb-4 rounded-xl bg-black/30 border border-white/10
            outline-none focus:ring-2 focus:ring-purple-500/50 text-white"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditMode(false);
                  setEditId(null);
                  setName("");
                  setDescription("");
                }}
                className="px-4 py-2 rounded-xl border border-white/10
              hover:bg-white/10 transition"
              >
                Cancel
              </button>

              <button
                onClick={editMode ? updateProject : addProject}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-500 hover:to-purple-500
              shadow-lg transition"
              >
                {editMode ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
