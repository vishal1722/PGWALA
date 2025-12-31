import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";

import StudentLogin from "../pages/student/Login";
import StudentRegister from "../pages/student/Register";
import StudentDashboard from "../pages/student/Dashboard";

import OwnerLogin from "../pages/owner/Login";
import OwnerRegister from "../pages/owner/Register";
import OwnerDashboard from "../pages/owner/Dashboard";

import StudentLayout from "../layouts/StudentLayout";
import OwnerLayout from "../layouts/OwnerLayout";

import ProtectedRoute from "../auth/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomePage />} />

      {/* Student Auth */}
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/register" element={<StudentRegister />} />

      {/* Owner Auth */}
      <Route path="/owner/login" element={<OwnerLogin />} />
      <Route path="/owner/register" element={<OwnerRegister />} />

      {/* Student Protected Routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute role="student">
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<StudentDashboard />} />
      </Route>

      {/* Owner Protected Routes */}
      <Route
        path="/owner"
        element={
          <ProtectedRoute role="owner">
            <OwnerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<OwnerDashboard />} />
      </Route>
    </Routes>
  );
}
