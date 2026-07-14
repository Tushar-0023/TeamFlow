import { useEffect, useState } from "react";
import {
  FolderKanban,
  Plus,
  ClipboardList,
  BarChart3,
  Sparkles,
  CircleCheckBig,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import api from "../../services/api";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState(null);

  const [recentProjects, setRecentProjects] = useState([]);
  const [recentTasks, setRecentTasks] = useState([]);

  const fetchData = async () => {
    try {
      const projectRes = await api.get("/projects");
      setProjects(projectRes.data);

      const taskPromises = projectRes.data.map((p) =>
        api.get(`/tasks/${p.id}`),
      );

      const taskResponses = await Promise.all(taskPromises);

      const allTasks = taskResponses
        .map((res) => res.data)
        .flat()
        .filter((t) => t && t.id);

      setTasks(allTasks);

      const sortedProjects = [...projectRes.data]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 3);

      setRecentProjects(sortedProjects);

      const sortedTasks = allTasks
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 5);

      setRecentTasks(sortedTasks);
    } catch (err) {
      console.log("Dashboard error:", err.message);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const todo = tasks.filter((t) => t.status === "todo").length;
  const inProgress = tasks.filter((t) => t.status === "inprogress").length;
  const done = tasks.filter((t) => t.status === "done").length;

  return (
    <div className="min-h-screen p-4 md:p-6 bg-gradient-to-br from-[#070b14] via-[#0b1220] to-[#070b14] text-white relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      {/* ================= HERO ================= */}

      <div className="relative mb-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
        {/* Animated Glow */}
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-cyan-500/30 blur-[120px]" />

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 p-8 md:p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur-md">
                <Sparkles size={16} />
                Premium Productivity Workspace
              </div>

              {/* Heading */}

              <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Build Faster.
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                  Stay Organized.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-300 leading-8">
                Manage projects, organize tasks, monitor progress and keep your
                team productive from one beautiful dashboard.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="
        group
        flex items-center gap-2
        rounded-xl
        bg-gradient-to-r
        from-indigo-600
        to-purple-600
        px-6
        py-3
        font-semibold
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-indigo-500/40
      "
                >
                  <Plus size={18} />
                  New Project
                </button>

                <button
                  className="
        flex items-center gap-2
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-6
        py-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:bg-white/10
        hover:scale-105
      "
                >
                  <ClipboardList size={18} />
                  Add Task
                </button>

                <button
                  className="
        flex items-center gap-2
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-6
        py-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:bg-white/10
        hover:scale-105
      "
                >
                  <BarChart3 size={18} />
                  Analytics
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
                <h3 className="text-lg font-semibold mb-6">Quick Insights</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-gray-400">Projects</span>
                      <span>{projects.length}</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-gray-400">Completed Tasks</span>
                      <span>{done}</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                        style={{
                          width:
                            tasks.length > 0
                              ? `${(done / tasks.length) * 100}%`
                              : "0%",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-gray-400">Pending</span>
                      <span>{todo + inProgress}</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-400 to-red-500"
                        style={{
                          width:
                            tasks.length > 0
                              ? `${((todo + inProgress) / tasks.length) * 100}%`
                              : "0%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PREMIUM STATS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {[
          {
            title: "Projects",
            value: stats ? stats.totalProjects : projects.length,
            subtitle: "All active workspaces",
            icon: FolderKanban,
            color: "cyan",
            badge: "Active",
          },

          {
            title: "Tasks",
            value: stats ? stats.totalTasks : tasks.length,
            subtitle: "Tasks in workspace",
            icon: ClipboardList,
            color: "violet",
            badge: "Updated",
          },

          {
            title: "Completed",
            value: stats ? stats.completedTasks : done,
            subtitle: "Successfully finished",
            icon: CircleCheckBig,
            color: "green",
            badge: "Great",
          },

          {
            title: "Pending",
            value: stats ? stats.pendingTasks : todo + inProgress,
            subtitle: "Need your attention",
            icon: Clock3,
            color: "orange",
            badge: "Review",
          },
        ].map((card, index) => {
          const Icon = card.icon;

          const colors = {
            cyan: {
              icon: "text-cyan-400",
              glow: "from-cyan-500/20 to-blue-500/5",
              badge: "bg-cyan-500/15 text-cyan-300",
            },

            violet: {
              icon: "text-violet-400",
              glow: "from-violet-500/20 to-purple-500/5",
              badge: "bg-violet-500/15 text-violet-300",
            },

            green: {
              icon: "text-green-400",
              glow: "from-green-500/20 to-emerald-500/5",
              badge: "bg-green-500/15 text-green-300",
            },

            orange: {
              icon: "text-orange-400",
              glow: "from-orange-500/20 to-red-500/5",
              badge: "bg-orange-500/15 text-orange-300",
            },
          };

          return (
            <div
              key={index}
              className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/20
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colors[card.color].glow} opacity-0 group-hover:opacity-100 transition duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className="
              h-14
              w-14
              rounded-2xl
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
            "
                  >
                    <Icon className={colors[card.color].icon} size={28} />
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${colors[card.color].badge}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <p className="mt-6 text-gray-400 text-sm">{card.title}</p>

                <h2 className="text-4xl font-bold mt-2 tracking-tight">
                  {card.value}
                </h2>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-gray-400">{card.subtitle}</span>

                  <ArrowUpRight
                    size={18}
                    className="
              opacity-50
              transition
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= TASK BREAKDOWN ================= */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Task Progress</h2>

            <p className="text-gray-400 mt-1">
              Overview of your current workflow
            </p>
          </div>

          <div className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
            {tasks.length} Total Tasks
          </div>
        </div>

        {[
          {
            label: "Todo",
            value: todo,
            color: "from-yellow-400 to-orange-500",
          },

          {
            label: "In Progress",
            value: inProgress,
            color: "from-blue-400 to-cyan-500",
          },

          {
            label: "Completed",
            value: done,
            color: "from-green-400 to-emerald-500",
          },
        ].map((item, index) => {
          const percentage =
            tasks.length > 0 ? (item.value / tasks.length) * 100 : 0;

          return (
            <div key={index} className="mb-7 last:mb-0">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h4 className="font-semibold text-lg">{item.label}</h4>

                  <p className="text-sm text-gray-400">{item.value} Tasks</p>
                </div>

                <div className="text-right">
                  <span className="text-xl font-bold">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              </div>

              <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-700`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* ================= RECENT PROJECTS ================= */}

        <div
          className="
  rounded-3xl
  border
  border-white/10
  bg-white/5
  backdrop-blur-2xl
  p-6
  shadow-2xl
"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Recent Projects</h2>

              <p className="text-gray-400 text-sm mt-1">
                Your latest created workspaces
              </p>
            </div>

            <FolderKanban className="text-cyan-400" size={28} />
          </div>

          {recentProjects.length === 0 ? (
            <div className="py-12 text-center">
              <FolderKanban size={52} className="mx-auto text-gray-500 mb-4" />

              <p className="text-gray-400">No projects available</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentProjects.map((p) => (
                <div
                  key={p.id}
                  className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          p-5
          transition-all
          duration-300
          hover:bg-white/[0.08]
          hover:-translate-y-1
          hover:border-cyan-500/30
        "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {p.name || p.title}
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        Recently created project
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="
              text-gray-400
              transition
              duration-300
              group-hover:text-cyan-400
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= RECENT TASKS ================= */}

        <div
          className="
  rounded-3xl
  border
  border-white/10
  bg-white/5
  backdrop-blur-2xl
  p-6
  shadow-2xl
"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Recent Tasks</h2>

              <p className="text-gray-400 text-sm mt-1">Recently added tasks</p>
            </div>

            <ClipboardList className="text-violet-400" size={28} />
          </div>

          {recentTasks.length === 0 ? (
            <div className="py-12 text-center">
              <ClipboardList size={52} className="mx-auto text-gray-500 mb-4" />

              <p className="text-gray-400">No tasks available</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentTasks.map((t) => (
                <div
                  key={t.id}
                  className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          p-5
          transition-all
          duration-300
          hover:bg-white/[0.08]
          hover:-translate-y-1
          hover:border-violet-500/30
        "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{t.title}</h3>

                      <p className="text-sm text-gray-400 mt-1">
                        Latest task in your workspace
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="
              text-gray-400
              transition
              duration-300
              group-hover:text-violet-400
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
