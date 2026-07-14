import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <Outlet />
      </div>
    </div>
  );
}
