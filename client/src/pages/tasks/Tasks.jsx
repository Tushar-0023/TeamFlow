import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import {
  DndContext,
  closestCorners,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";

export default function Tasks() {
  const { projectId } = useParams();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  // ✅ ADDED: priority state (IMPORTANT FIX)
  const [priority, setPriority] = useState("medium");

  // FETCH TASKS
  const fetchTasks = async () => {
    const res = await api.get(`/tasks/${projectId}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId]);

  // ADD TASK
  const addTask = async () => {
    if (!title.trim()) return;

    await api.post("/tasks", {
      project_id: projectId,
      title,
      priority,
      due_date: dueDate || null,
    });

    setTitle("");
    setPriority("medium");
    fetchTasks();
  };

  // UPDATE STATUS
  const updateStatus = async (taskId, status) => {
    await api.put("/tasks/status", {
      taskId,
      status,
    });

    fetchTasks();
  };
  const deleteTask = async (taskId) => {
    await api.delete(`/tasks/${taskId}`);
    fetchTasks();
  };

  // DRAG END
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    updateStatus(active.id, over.id);
  };

  // GROUP TASKS
  const todo = tasks.filter((t) => t.status === "todo");
  const inProgress = tasks.filter((t) => t.status === "inprogress");
  const done = tasks.filter((t) => t.status === "done");

  // PRIORITY COLOR
  const getPriorityColor = (priority) => {
    if (priority === "high") return "text-red-600 bg-red-100";
    if (priority === "medium") return "text-yellow-600 bg-yellow-100";
    return "text-green-600 bg-green-100";
  };

  // TASK CARD
  const TaskCard = ({ task }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
      id: task.id,
    });

    return (
      <div
        ref={setNodeRef}
        {...attributes}
        className={`bg-white p-3 rounded shadow mb-2 cursor-grab ${
          isDragging ? "opacity-50" : ""
        }`}
      >
        <div {...listeners} className="cursor-grab text-xs text-gray-500 mb-2">
          ⠿ drag
        </div>

        <p className="font-semibold text-sm">{task.title}</p>

        <span
          className={`inline-block mt-1 px-2 py-1 text-xs rounded ${getPriorityColor(
            task.priority,
          )}`}
        >
          {task.priority || "medium"}
        </span>
        {task.due_date && (
          <p className="text-xs text-gray-500 mt-1">📅 {task.due_date}</p>
        )}
        <select
          className="w-full mt-2 border text-sm p-1"
          value={task.status}
          onChange={(e) => updateStatus(task.id, e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button
          onClick={() => deleteTask(task.id)}
          className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white text-sm p-1 rounded"
        >
          Delete Task
        </button>
      </div>
    );
  };

  // COLUMN
  const Column = ({ id, title, children }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
      <div ref={setNodeRef} className="bg-gray-100 p-3 rounded min-h-[300px]">
        <h3 className="font-bold mb-3">{title}</h3>
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Kanban Board (Project {projectId})
        </h2>
        <p className="text-gray-500 text-sm">
          Drag & drop tasks between columns
        </p>
      </div>

      {/* ADD TASK SECTION */}
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="border border-gray-200 rounded-lg p-3 flex-1 outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="New Task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black-400"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High 🔴</option>
            <option value="medium">Medium 🟡</option>
            <option value="low">Low 🟢</option>
          </select>

          <input
            type="date"
            className="border border-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button
            onClick={addTask}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* BOARD */}
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TODO */}
          <Column id="todo" title="Todo">
            <div className="space-y-3">
              {todo.map((t) => (
                <TaskCard key={t.id} task={t} />
              ))}
            </div>
          </Column>

          {/* IN PROGRESS */}
          <Column id="inprogress" title="In Progress">
            <div className="space-y-3">
              {inProgress.map((t) => (
                <TaskCard key={t.id} task={t} />
              ))}
            </div>
          </Column>

          {/* DONE */}
          <Column id="done" title="Done">
            <div className="space-y-3">
              {done.map((t) => (
                <TaskCard key={t.id} task={t} />
              ))}
            </div>
          </Column>
        </div>
      </DndContext>
    </div>
  );
}
