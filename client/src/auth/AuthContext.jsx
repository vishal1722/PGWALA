import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  /*
    user = {
      role: "student" | "owner",
      data: {}
    }
  */

  // Load auth from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("pgfinder_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login handler
  const login = (role, data = {}) => {
    const userData = { role, data };
    setUser(userData);
    localStorage.setItem("pgfinder_user", JSON.stringify(userData));
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    localStorage.removeItem("pgfinder_user");
  };

  const value = {
    user,
    role: user?.role || null,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
