// src/components/Layout.jsx
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Layout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="app-layout">
      <header className="topbar">
        <Link to="/" className="brand">
          MERN Handbook App
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/users">Users</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
