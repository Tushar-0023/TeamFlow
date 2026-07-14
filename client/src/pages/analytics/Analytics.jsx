import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

export default function Analytics() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // SAFE FETCH (same logic as dashboard)
  const fetchTasks = async () => {
    try {
      console.log("Analytics fetching started");

      const projectRes = await api.get("/projects");

      console.log("Projects:", projectRes.data);

      let allTasks = [];

      for (let id of projectRes.data.map((p) => p.id)) {
        const taskRes = await api.get(`/tasks/${id}`);
        console.log("Tasks for project", id, taskRes.data);

        if (Array.isArray(taskRes.data)) {
          allTasks = allTasks.concat(taskRes.data);
        }
      }

      console.log("Final tasks:", allTasks);
      setTasks(allTasks);
    } catch (err) {
      console.log("Analytics error:", err.message);
    } finally {
      console.log("Analytics fetch finished");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const todo = tasks.filter((t) => t.status === "todo").length;
  const inProgress = tasks.filter((t) => t.status === "inprogress").length;
  const done = tasks.filter((t) => t.status === "done").length;

  const data = [
    { name: "Todo", value: todo },
    { name: "In Progress", value: inProgress },
    { name: "Done", value: done },
  ];
  const barData = [
    { name: "Todo", value: todo },
    { name: "Progress", value: inProgress },
    { name: "Done", value: done },
  ];

  const areaData = [
    { name: "Todo", tasks: todo },
    { name: "Progress", tasks: inProgress },
    { name: "Done", tasks: done },
  ];
  const COLORS = ["#facc15", "#3b82f6", "#22c55e"];

  // LOADING STATE
  if (loading) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Analytics</h2>
        <p className="text-gray-500">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#070b14] via-[#0b1220] to-[#070b14] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-violet-600 blur-[140px] rounded-full -top-24 -left-24" />

        <div className="absolute w-[450px] h-[450px] bg-cyan-600 blur-[140px] rounded-full bottom-0 right-0" />
      </div>

      <div className="relative z-10"></div>
      {/* ================= HERO ================= */}

      <div className="relative overflow-hidden rounded-3xl mb-8 border border-white/10 bg-gradient-to-r from-indigo-600/80 via-violet-600/80 to-cyan-600/80 p-8 shadow-2xl">
        {/* Glow */}
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-[100px]" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur-xl">
              📊 Team Performance
            </span>

            <h1 className="text-4xl font-bold mt-5 text-white">
              Analytics Dashboard
            </h1>

            <p className="text-white/80 mt-3 max-w-xl">
              Monitor productivity, task completion, and project performance
              with real-time insights.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-xl">
              <p className="text-sm text-white/70">Total Tasks</p>

              <h2 className="text-3xl font-bold mt-2">{tasks.length}</h2>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur-xl">
              <p className="text-sm text-white/70">Productivity</p>

              <h2 className="text-3xl font-bold mt-2">
                {tasks.length > 0 ? Math.round((done / tasks.length) * 100) : 0}
                %
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      {tasks.length === 0 ? (
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md border border-gray-200">
          <p className="text-gray-500">No tasks found</p>
        </div>
      ) : (
        <div>
          {/* STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-sm text-gray-500">Todo</h3>
              <p className="text-3xl font-bold text-yellow-500 mt-2">{todo}</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-sm text-gray-500">In Progress</h3>
              <p className="text-3xl font-bold text-blue-500 mt-2">
                {inProgress}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-sm text-gray-500">Done</h3>
              <p className="text-3xl font-bold text-green-500 mt-2">{done}</p>
            </div>
          </div>
          {/* ================= CHARTS ================= */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* DONUT */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Task Distribution
              </h3>

              <div className="h-[350px]">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={120}
                      paddingAngle={5}
                      animationBegin={0}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    >
                      {data.map((_, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>

                    <Tooltip />

                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* BAR */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl hover:shadow-violet-500/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Task Comparison
              </h3>

              <div className="h-[350px]">
                <ResponsiveContainer>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                    <XAxis dataKey="name" stroke="#94a3b8" />

                    <YAxis stroke="#94a3b8" />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                      radius={[8, 8, 0, 0]}
                      fill="#8b5cf6"
                      animationDuration={1400}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* AREA CHART */}

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Tasks Overview
            </h3>

            <div className="h-[350px]">
              <ResponsiveContainer>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />

                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                  <XAxis dataKey="name" stroke="#94a3b8" />

                  <YAxis stroke="#94a3b8" />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="tasks"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorTasks)"
                    animationDuration={1800}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
