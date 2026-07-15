import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import {
  LayoutDashboard,
  FolderKanban,
  ClipboardList,
  BarChart3,
  User,
  Settings,
  LogOut,
  Sparkles,
  Search,
  Bell,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  const isActive = (path) => location.pathname === path;

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Projects",
      icon: FolderKanban,
      path: "/projects",
    },
    {
      name: "Tasks",
      icon: ClipboardList,
      path: "/projects",
      active: location.pathname.includes("/tasks"),
    },
    {
      name: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
      active: location.pathname.includes("/profile"),
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
      active: location.pathname.includes("/settings"),
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
fixed lg:relative
top-0 left-0
z-50
h-screen
w-72
bg-[#0b1220]
text-white
border-r border-white/10
overflow-hidden
flex flex-col
p-6
transform
transition-transform
duration-300
${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
lg:translate-x-0
`}
      >
        {/* Close Button */}

        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-5 right-5 lg:hidden"
        >
          <X size={24} />
        </button>

        {/* Glow */}

        <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Logo */}

        <div className="relative z-10 mb-10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl">
              <Sparkles size={22} />
            </div>

            <div>
              <h2 className="font-bold text-2xl">TeamFlow</h2>

              <p className="text-xs text-gray-400">Project Workspace</p>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="relative z-10 flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = item.active ?? isActive(item.path);

            return (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`
group
flex
items-center
gap-4
rounded-2xl
px-4
py-3.5
transition-all
duration-300

${
  active
    ? "bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg"
    : "hover:bg-white/5"
}
`}
              >
                <Icon
                  size={20}
                  className={
                    active
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }
                />

                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}

        <div className="relative z-10 mt-auto pt-6">
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="
w-full
flex
items-center
justify-center
gap-2
rounded-2xl
bg-gradient-to-r
from-red-500
to-red-600
py-3.5
font-semibold
transition-all
duration-300
hover:scale-[1.02]
hover:shadow-xl
hover:shadow-red-500/20
"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN AREA ================= */}

      <div className="flex-1 flex flex-col min-w-0">
        {/* ================= TOPBAR ================= */}

        <header
          className="
h-20
md:h-24
border-b
border-white/10
bg-gradient-to-r
from-[#0b0f19]
via-[#1f2937]
to-[#4b5563]
backdrop-blur-2xl
px-4
sm:px-6
lg:px-8
flex
items-center
justify-between
"
        >
          {/* Left */}

          <div className="flex items-center gap-4">
            {/* Mobile Menu */}

            <button
              onClick={() => setSidebarOpen(true)}
              className="
lg:hidden
h-11
w-11
rounded-xl
bg-white/10
flex
items-center
justify-center
text-white
hover:bg-white/20
transition
"
            >
              <Menu size={22} />
            </button>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {location.pathname === "/dashboard"
                  ? "Dashboard"
                  : location.pathname.includes("/projects")
                    ? "Projects"
                    : location.pathname.includes("/tasks")
                      ? "Tasks"
                      : location.pathname.includes("/analytics")
                        ? "Analytics"
                        : location.pathname.includes("/profile")
                          ? "Profile"
                          : location.pathname.includes("/settings")
                            ? "Settings"
                            : "TeamFlow"}
              </h2>

              <div className="hidden sm:flex items-center gap-2 mt-1 text-sm text-gray-400">
                <CalendarDays size={15} />

                <span>
                  {greeting} • {today}
                </span>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}

            <div className="hidden xl:flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2">
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder:text-gray-500 w-48"
              />
            </div>

            {/* Notification */}

            <button
              className="
h-10
w-10
sm:h-11
sm:w-11
rounded-2xl
bg-white/5
border
border-white/10
flex
items-center
justify-center
hover:bg-white/10
transition
text-white
"
            >
              <Bell size={18} />
            </button>

            {/* Avatar */}

            <div className="flex items-center gap-3">
              <div
                className="
h-10
w-10
sm:h-11
sm:w-11
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-violet-600
flex
items-center
justify-center
font-bold
shadow-lg
text-white
"
              >
                T
              </div>

              <div className="hidden md:block">
                <p className="text-white font-semibold">Tushar</p>

                <p className="text-xs text-gray-400">Project Manager</p>
              </div>
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}

        <main
          className="
flex-1
overflow-y-auto
bg-gray-50
dark:bg-gray-900
text-gray-900
dark:text-white
p-4
sm:p-5
lg:p-6
"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
