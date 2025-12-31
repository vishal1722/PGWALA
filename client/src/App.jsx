import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// layouts
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";

// pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OwnerProfile from "./pages/OwnerProfile";
import PgSetup from "./pages/PgSetup";
import OwnerDashboard from "./pages/OwnerDashboard";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user.onboardingStep === "DONE"
    ? children
    : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />

          {/* 🔐 AUTH PAGES */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* 🧭 OWNER ONBOARDING */}
          <Route path="/onboarding/profile" element={<OwnerProfile />} />
          <Route path="/onboarding/pg" element={<PgSetup />} />

          {/* 🚀 OWNER DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <OwnerDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
