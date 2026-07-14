import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOAD USER FROM STORAGE
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "undefined") {
      setUser({ token });
    } else {
      localStorage.removeItem("token");
    }

    setLoading(false);
  }, []);

  // LOGIN
  const login = (token) => {
    if (!token || token === "undefined") return;

    localStorage.setItem("token", token);
    setUser({ token });
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
