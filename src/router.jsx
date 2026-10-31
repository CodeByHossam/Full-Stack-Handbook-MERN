// src/router.jsx
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";

// Page components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// 1. Auth Guard — uses Redux state, no loaders/actions
function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

// 2. Route Configuration — Data Mode (createBrowserRouter)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // Data Mode Advantage: Global Error Boundary
    children: [
      { index: true, element: <Home /> }, // Public Route
      { path: "login", element: <Login /> }, // Public Route
      { path: "register", element: <Register /> }, // Public Route
      {
        element: <ProtectedRoute />, // Wraps private routes
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "products", element: <Products /> },
          { path: "products/:id", element: <ProductDetail /> },
          { path: "users", element: <Users /> },
          { path: "users/:id", element: <UserDetail /> },
          { path: "profile", element: <Profile /> },
        ],
      },
      { path: "*", element: <NotFound /> }, // 404
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
