import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // FETCH PROFILE
  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/profile");
      setUser(res.data.user);
      setFullName(res.data.user.full_name);
      setEmail(res.data.user.email);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // UPDATE PROFILE
  const updateProfile = async () => {
    try {
      await api.put("/auth/profile", {
        full_name,
        email,
      });

      alert("Profile updated");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  // CHANGE PASSWORD
  const changePassword = async () => {
    try {
      await api.put("/auth/change-password", {
        oldPassword,
        newPassword,
      });

      alert("Password changed");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-[#070b14] via-[#0b1220] to-[#070b14] text-white">
      {/* PAGE TITLE */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Profile Settings</h2>
        <p className="text-gray-400 text-sm mt-1">
          Manage your account information and security settings
        </p>
      </div>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PROFILE INFO */}
        <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 blur-2xl"></div>

          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>

            <input
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10
            outline-none focus:ring-2 focus:ring-blue-500/50
            text-white placeholder-gray-400 transition"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />

            <input
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10
            outline-none focus:ring-2 focus:ring-purple-500/50
            text-white placeholder-gray-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <button
              onClick={updateProfile}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
            hover:from-blue-500 hover:to-purple-500
            shadow-lg hover:shadow-blue-500/30
            transition-all duration-300 font-medium"
            >
              Update Profile
            </button>
          </div>
        </div>

        {/* CHANGE PASSWORD */}
        <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/10 via-orange-600/10 to-pink-600/10 blur-2xl"></div>

          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Change Password</h3>

            <input
              type="password"
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10
            outline-none focus:ring-2 focus:ring-red-500/50
            text-white placeholder-gray-400 transition"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Old Password"
            />

            <input
              type="password"
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10
            outline-none focus:ring-2 focus:ring-pink-500/50
            text-white placeholder-gray-400 transition"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
            />

            <button
              onClick={changePassword}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600
            hover:from-red-500 hover:to-pink-500
            shadow-lg hover:shadow-red-500/30
            transition-all duration-300 font-medium"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
